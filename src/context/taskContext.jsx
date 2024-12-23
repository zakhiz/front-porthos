import React, { createContext, useState, useContext, useEffect } from "react";
import { getTasks } from "../services/tasK.service"; 
import { useAuth } from "./authContext";
import { showToast } from "../utils/notification";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); 
  const { usrId } = useAuth();

  useEffect(() => {
    if (!usrId) return;
  
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks(usrId);
        setTasks(fetchedTasks.data);
        showToast("Tareas encontradas", "success");
      } catch (error) {
        showToast("No hay tareas cargadas", "error");
      }
    };
  
    fetchTasks();
  }, [usrId]);

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };


  const updateTaskInContext = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); 
  };

  return (
    <TaskContext.Provider value={{ tasks,  addTask, removeTask, updateTaskInContext}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);

import React, { useState } from "react";
import { createTask } from "../../../services/tasK.service";
import { showToast } from "../../../utils/notification";
import { useAuth } from "../../../context/authContext";
import { useTaskContext } from "../../../context/taskContext";

const CreateTaskModal = ({ isOpen, onClose }) => {
  const { usrId } = useAuth();
  const { addTask } = useTaskContext();

  const [btnDisable, setBtnDisable] = useState(false)

  const [taskData, setTaskData] = useState({
        title: "",
        description:"",
        due_date: ""
  })

  const resetForm = () => {
      setTaskData({
          title: "",
          description: "",
          due_Date: "",
      });
  };
  const handleClose = () => {
    onClose();
    resetForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;


  const handleSubmit = async () => {
    resetForm()
    setBtnDisable(true);

    if (!taskData.title || !taskData.description || !taskData.due_date) {
      showToast('Todos los campos son obligatorios','error')
      return;
    }
    
    try {
      const payload = {title: taskData.title,description:taskData.description, due_Date: taskData.due_date, status: 'open', user_id: usrId }
      const createdTask = await createTask(payload);
      addTask(createdTask.data)
      showToast('Tarea creada correctamente','success');

      onClose();
    } catch (err) {
      showToast('Hubo un problema al crear la tarea. Inténtalo de nuevo.', 'error')
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
      <div className="bg-black p-10 xl:w-[600px] w-[300ppx] rounded-md border-lime-400 border-t-2 border-b-2 border-r-2">
        <h2 className="text-xl font-bold mb-4 text-white">Crear nueva tarea</h2>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={taskData.title}
          onChange={handleChange}
          className="w-full bg-transparent mb-4 border-b-2 border-lime-300 font-semibold outline-none text-white"
        />
        <textarea
          placeholder="Descripción"
          value={taskData.description}
          name="description"
          onChange={(e) => {
            const input = e.target.value;
            if (input.length <= 255) {
                handleChange(e)
            }
          }}
          className="w-full p-2 bg-transparent border-lime-300 border-b-2 outline-none text-white resize-none"
        ></textarea>
        <p className="text-sm text-white mb-4 text-end">
                {taskData.description.length}/255 caracteres
        </p>
        <label className="text-gray-300 text-sm">Fecha de entrega</label>
        <input
          name="due_date"
          type="date"
          value={taskData.due_Date}
          onChange={handleChange}
          className="w-full mb-4 p-2 border-lime-300 border-b-2 text-black"
        />

        <div className="flex xl:justify-end justify-center gap-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            disabled={btnDisable}
          >
            CANCELAR
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-lime-400 text-black font-bold rounded hover:bg-lime-500"
          >
            CREAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;

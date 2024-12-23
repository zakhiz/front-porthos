import ApiConfig from "../services/api.service";
import { showToast } from "../utils/notification";

// Obtener todas las tareas
export const getTasks = async (id) => {
  try {
    const response = await ApiConfig.get(`/task?id=${id}`);
    
    if (response.status == 204) {
        const errorData = {
            status: response.status,
            error_description: 'No hay tareas creadas'
        }
        throw errorData
    }else{
        return response.data
    }
  } catch (error) {
    throw error;
  }
};

// Crear una nueva tarea
export const createTask = async (taskData) => {
  try {
    const response = await ApiConfig.post("/task/create", taskData);
    return response.data;
  } catch (error) {
    console.error("Error al crear la tarea:", error.response?.data || error.message);
    throw error;
  }
};

// Actualizar una tarea
export const updateTask = async (taskId, taskData) => {
  try {
    const response = await ApiConfig.put(`/task/uptask?id=${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la tarea:", error.response?.data || error.message);
    throw error;
  }
};

// Eliminar una tarea
export const deleteTask = async (taskId) => {
  try {
    const response = await ApiConfig.delete(`/task/deltask?id=${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar la tarea:", error.response?.data || error.message);
    throw error;
  }
};

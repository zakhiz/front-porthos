import { useEffect, useState } from "react";
import { deleteTask, updateTask } from "../../../services/tasK.service";
import { showToast } from "../../../utils/notification";
import { useTaskContext } from "../../../context/taskContext";
import { useAuth } from "../../../context/authContext";

const ModalTaskDetail = ({ isOpen, onClose, task }) => {
    const { usrId } = useAuth();
    const { removeTask, updateTaskInContext } = useTaskContext();
    useEffect(() => {
        if (task) {
            setTaskData({
              title: task.title,
              description: task.description,
              due_date: task.due_date,
              status: task.status,
            });
          }
    }, [task])
    
    const [taskData, setTaskData] = useState({
            title: "",
            description:"",
            due_date: "",
            status:""
    })
    
    if (!isOpen || !task) return null;

    const formatDate = (date) => {
        if (!date) return "";
        const d = new Date(date);
        const year = d.getUTCFullYear();
        const month = String(d.getUTCMonth() + 1).padStart(2, "0");
        const day = String(d.getUTCDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      
      setTaskData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleDel = async () => {
        
        const res = await deleteTask(task.id)
        removeTask(task.id);
        if (res.status == 200) {
            showToast("Tarea eliminada correctamente", "success");
            onClose();            
        }else{
            showToast("Ocurrio un error al querer eliminar la tarea, intentelo nuevamente mas tarde", "error");
        }

    };

    const handleUpdate = async () => {
   
      const res = await updateTask(task.id, {...taskData,user_id: usrId});
      updateTaskInContext(res.data)      
      if (res.status == 200) {
        showToast("Tarea actualizada correctamente", "success");
        onClose();  
      }else{
        showToast("Ocurrio un error al actualizar la tarea", "error");
      }
      
    };
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
        <div className="bg-black p-10 xl:w-[600px] w-[300px] rounded-md border-lime-400 border-t-2 border-b-2 border-r-2">
          <h2 className="text-xl font-bold mb-4 text-white">Detalles de la tarea</h2>
          <input
            type="text"
            name="title"
            value={taskData.title} // No se renderiza si `task` es null
            onChange={handleChange}
            className="w-full bg-transparent mb-4 border-b-2 border-lime-300 font-semibold outline-none text-white"
          />
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            className="w-full p-2 bg-transparent border-lime-300 border-b-2 outline-none text-white resize-none"
          ></textarea>
          <label className="text-gray-300 text-sm mt-4 block">Estado</label>
          <select
            name="status"
            value={taskData.status}
            onChange={handleChange}
            className="w-full mb-4 p-2 border-lime-300 border-b-2 text-black"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
            <label className="text-gray-300 text-sm">Fecha de entrega</label>
            <input
            name="due_date"
            type="date"
            value={formatDate(taskData.due_date)}
            onChange={handleChange}
            className="w-full mb-4 p-2 border-lime-300 border-b-2 text-black"
            />

          <div className="flex xl:flex-row flex-col xl:justify-between items-center gap-4">
                <button onClick={handleDel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                        BORRAR
                </button>
                <div className="flex gap-2">
                        <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                        CANCELAR
                        </button>
                        <button onClick={handleUpdate} className="px-4 py-2 bg-lime-400 text-black font-bold rounded hover:bg-lime-500">
                        ACTUALIZAR
                        </button>
                </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalTaskDetail;
  
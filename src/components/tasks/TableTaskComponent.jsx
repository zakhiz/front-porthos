import { useState } from "react";
import DoneComponent from "./task/DoneComponent"
import InProgressComponent from "./task/InProgressComponent"
import OpenComponenTask from "./task/OpenComponenTask"
import CreateTaskModal from "./components/ModalTask";
import { useTaskContext } from "../../context/taskContext";

const TableTaskComponent = () => {
    const { tasks } = useTaskContext();

    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [filter, setFilter] = useState("all");

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    
    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") return true;
        return task.status === filter; 
    });

    const openTasks = filteredTasks.filter((task) => task.status === "open");
    const inProgressTasks = filteredTasks.filter((task) => task.status === "in_progress");
    const doneTasks = filteredTasks.filter((task) => task.status === "done");


    return (
        <div className="h-screen bg-black flex items-center flex-col">
                <div className="mb-4">
                   <div className="flex flex-col gap-1">

                        <label htmlFor="taskFilter" className="text-white mr-2">Filtrar por estado:</label>
                        <select
                        id="taskFilter"
                        className="w-[200px] p-2 border-lime-400 rounded-md outline-none border-2 text-white bg-black"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="all">Todos</option>
                            <option value="open">Open</option>
                            <option value="in_progress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                   </div>
                </div>
                <div className="flex justify-around gap-4 w-[70vw] h-[80vh] border-lime-400 mt-4 border-t-2 border-b-2 border-r-2 bg-black p-6 rounded-md">
                    
                    <OpenComponenTask tasks={openTasks}/>
                    <InProgressComponent tasks={inProgressTasks}/>
                    <DoneComponent tasks={doneTasks}/>
                    <div>
                        <button  onClick={handleOpenModal} className="text-white hover:text-black bg-lime-400 px-4 py-3 rounded-md font-semibold">CREAR TAREA</button>
                    </div>
                </div>
                <CreateTaskModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    )
}


export default TableTaskComponent
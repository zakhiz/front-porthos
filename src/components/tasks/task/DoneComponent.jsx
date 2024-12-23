import { useState } from "react";
import ModalTaskDetail from "../components/ModalTaskDetail";

const DoneComponent = ({tasks})=> {
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = (task) => {
      setSelectedTask(task);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setSelectedTask(null);
      setIsModalOpen(false);
    };    
    return (
         <div className="xl:overflow-y-auto p-4 rounded-md">
          <p className="pl-2 w-full h-14 flex items-center bg-teal-400 mb-4 rounded-md text-lg text-black font-semibold">
            Done
          </p>
          <div className="flex flex-col gap-5 w-[300px] h-[200px]">
            {tasks.map((task) => (
              <div key={task.id} className=" bg-teal-300 cursor-pointer" onClick={() => handleOpenModal(task)}>
                <div className="mt-4">
                  <div className="ml-2 text-xl font-bold p-2">{task.title}</div>
                  <div className="ml-2 text-lg font-medium p-2">{task.description}</div>
                  <div className="ml-2 text-lg font-medium p-2">
                    Fecha límite: {task.due_date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ModalTaskDetail isOpen={isModalOpen} onClose={handleCloseModal} task={selectedTask} />

        </div>

    )
}

export default DoneComponent
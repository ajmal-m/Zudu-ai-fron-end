import { memo, useCallback } from "react";
import Badge from "../reusable/badge";
import type { Task } from "../../Types";
import { formatDate } from "../../lib/utils";
import EditTask from "../edit-task";
import DeleteTask from "../delete-task";
import Button from "../reusable/button";
import axiosInstance from "../../lib/axios";
import { useTaskContext } from "../../context/taskContext";
import toast from 'react-hot-toast';
import { useAuth } from "../../context/authContext";

const Card = memo(({ task }:{ task: Task}) => {

    const {getAllTasks} = useTaskContext();
    const {user} = useAuth()

    const markTaskDone = useCallback( async () => {
        try {
            await axiosInstance.put(`/tasks/${task._id}`, {
                status:"Done"
            });
            setTimeout(() => {
                toast.success("Task marked as Done")
            }, 2000);
            getAllTasks();
        } catch (error) {
            console.log(error);
        }
    }, []);


    return(
        <div className="w-[350px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-[300px]">
            <div className="p-5">
                {/* Title */}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {task.title}
                </h5>

                {/* Description */}
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                   { task.description}
                </p> */}

                {/* Details */}
                <div className="text-sm text-gray-800 dark:text-gray-300 space-y-1 mb-4">
                    <p>
                        <span className="font-semibold">Assignee:</span> {task.assignedTo.name}
                    </p>
                    <p>
                        <span className="font-semibold">Status:</span>{" "}
                        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                        {task.status}
                        </span>
                    </p>
                    <p>
                        <span className="font-semibold">Priority:</span>{" "}
                        <Badge priority={task.priority} label={task.priority}/>
                    </p>
                    <p>
                        <span className="font-semibold">Due Date:</span> {formatDate(task.dueDate)}
                    </p>
                    <p>
                        <span className="font-semibold">Managed By:</span> {task.managedBy.name}
                    </p>
                </div>

                {/* Action Button */}
               <div className="flex gap-4">
                 {
                    ( user?.role === 'admin' || task?.managedBy._id === user?._id || task?.assignedTo?._id === user?._id ) && (<EditTask currentTask={task}/>)
                 }
                 {
                     ( user?.role === 'admin' ) && (<DeleteTask task={task}/>)
                 }
                 {
                    ( task.status !== 'Done' && user?.role === 'admin' ) && (
                        <Button type="button" onClick={markTaskDone}>
                            Mark as Done
                        </Button>      
                    )
                 }
               </div>
            </div>
        </div>
    )
});

export default Card;
import { memo } from "react";
import Badge from "../reusable/badge";
import type { Task } from "../../Types";
import { formatDate } from "../../lib/utils";
import EditTask from "../edit-task";
import DeleteTask from "../delete-task";

const Card = memo(({ task }:{ task: Task}) => {
    return(
        <div className="max-w-[400px] min-w-[300px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-[300px]">
            <div className="p-5">
                {/* Title */}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {task.title}
                </h5>

                {/* Description */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                   { task.description}
                </p>

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
                 <EditTask currentTask={task}/>
                 <DeleteTask/>
               </div>
            </div>
        </div>
    )
});

export default Card;
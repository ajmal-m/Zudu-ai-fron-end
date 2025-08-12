import { memo } from "react";
import TaskCard from "./task-card";
import MenuIcon from '../../assets/menu.svg';
import AddIcon from '../../assets/add.svg';

const tasks = [
     {
        title:'Food Research',
        description:`Food design is required for our new project
let’s research the best practices.`,
        attachment:5, messages:8,
    },
    {
        title:'Mockups',
        description:`Create a 12 mockups for mobile iphone 13 pro max`,
        attachment:3, messages:6,
    },
     {
        title:'UI Animation',
        description:`Micro interaction loading and progress, 
story telling, Navigation`,
        attachment:2, messages:4,
    },
]

const TaskList = memo(({ status } : { status : string;}) => {
    return(
        <div className="w-[437px] h-[691px] bg-[#ffff] rounded-[8px]">
            <div 
                className="
                    flex justify-between items-center h-[50px] bg-[#CCCCCC] 
                    rounded-[8px] rounded-b-none px-[20px]
                "
            >
                <h1 className="text-[#223759] text-[16px] font-medium font-roboto">{status}</h1>
                <img src={MenuIcon} alt="menu-icon" />
            </div>

            <div className="flex flex-col items-center gap-[20px] mt-[20px] overflow-y-auto">
                <button
                    className="
                        w-[391px] h-[40px] border border-dashed
                        rounded-[8px] border-[#067C89]
                        flex items-center justify-center
                    "
                >
                    <img src={AddIcon} alt="add_icon" />
                </button>

                {
                    tasks.map((task, index) => (
                        <TaskCard task={task}/>
                    ))
                }
            </div>
        </div>
    )
});

export default TaskList;
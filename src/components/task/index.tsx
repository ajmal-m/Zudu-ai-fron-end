import { memo } from "react";
import Navbar from "../reusable/Navbar";
import Sidebar from "../reusable/sidebar";
import SearchIcon from '../../assets/search-icon.svg';
import CalenderLogo from '../../assets/calender.svg';
import DownArrow from '../../assets/drop-down-arrow.svg';
import TaskList from "../reusable/task-list";

const Tasks = memo(() => {

    return(
       <div className="h-[100vh] flex flex-col bg-[#83c29d39]">
        <Navbar/>
        <div className="flex h-full">
            <Sidebar/>
            <section id="tasks" className="p-[24px] pb-0 w-[calc(100vw-324px)] overflow-y-auto">
                <div>
                    <h1 className="text-[#9A93B3] text-[25px] font-semibold font-nunito">Tasks</h1>
                </div>

                <div className="w-full h-[calc(100vh-150px)] bg-[#F0F6FF] rounded-[8px] mt-[8px] p-[30px] pb-[18px]">
                    <div className="flex flex-col gap-[10px]">
                        <h1 className="text-[#223759] text-[22px] font-medium font-roboto" >Overview</h1>
                        <p className="text-[14px] font-light text-[#6F6F70] font-roboto">Edit or modify all card as you want</p>
                    </div>

                    <div className="mt-[37px] flex gap-[38px] items-center">
                        <div className="relative">
                            <input 
                                type="text" 
                                className="
                                    w-[437px] h-[51px] bg-[#CCCCCC] rounded-[8px]
                                    outline-none focus:outline-none pl-[39px] font-roboto
                                    placeholder:text-[14px] placeholder:font-light placeholder:font-roboto
                                " 
                                placeholder="Search Projects"
                            />
                           <img src={SearchIcon} alt="search-icon" className="absolute top-[20px] left-[17px]" />
                        </div>

                        <button 
                            type="button" 
                            className="w-[211px] h-[51px] rounded-[8px] bg-[#CCCCCC] 
                                flex items-center justify-center gap-[70px] cursor-pointer
                            "
                        >
                            <div className="flex items-center gap-[12px]">
                                <img src={CalenderLogo} alt="calender-logo" />
                                <p className="text-[#6F6F70]">List View</p>
                            </div>
                            <img src={DownArrow} alt="drop-down-arrow" />
                        </button>
                    </div>

                    <div className="mt-[34px] flex items-center gap-[38px]">
                        {
                            ["Backlog" ,"In progress", "Completed"].map(_ => (
                                <TaskList status={_}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
       </div>
    )
});

export default Tasks;
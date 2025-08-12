import { memo } from "react";
import Navbar from "../reusable/Navbar";
import Sidebar from "../reusable/sidebar";
import SearchIcon from '../../assets/search-icon.svg';
import CalenderLogo from '../../assets/calender.svg';
import DownArrow from '../../assets/drop-down-arrow.svg';
import MenuIcon from '../../assets/menu.svg';
import AddIcon from '../../assets/add.svg';
import clock from '../../assets/clock.svg';
import Attachment from '../../assets/attachments.svg';
import Messages from '../../assets/message.svg';

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
                                <div className="w-[437px] h-[691px] bg-[#ffff] rounded-[8px]">
                                    <div 
                                        className="
                                            flex justify-between items-center h-[50px] bg-[#CCCCCC] 
                                            rounded-[8px] rounded-b-none px-[20px]
                                        "
                                    >
                                        <h1 className="text-[#223759] text-[16px] font-medium font-roboto">{_}</h1>
                                        <img src={MenuIcon} alt="menu-icon" />
                                    </div>

                                    <div className="flex flex-col items-center gap-[20px] mt-[20px]">
                                        <button
                                            className="
                                                w-[391px] h-[40px] border border-dashed
                                                rounded-[8px] border-[#067C89]
                                                flex items-center justify-center
                                            "
                                        >
                                            <img src={AddIcon} alt="add_icon" />
                                        </button>

                                        <div
                                            className="
                                                w-[391px] h-[143px] bg-[#FFFFFF]
                                                rounded-[8px] p-[15px] pb-[10px] border
                                                border-gray-300
                                            "
                                        >
                                            <div className="flex justify-between">
                                                <h2 
                                                    className="
                                                        text-[#223759] text-[24px] font-medium font-roboto
                                                        leading-[24px]
                                                    "
                                                >
                                                    Usability Testing
                                                </h2>

                                                <div className="flex items-center gap-[12px]">
                                                    <img src={clock} alt="clock_icon" />
                                                    <p className="text-[#6F6F70] text-[14px] font-light font-roboto">12 Days</p>
                                                </div>
                                            </div>

                                            <div className="mt-[15px]">
                                                <p 
                                                    className="
                                                        text-[14px] font-roboto font-light
                                                        text-[#6F6F70]
                                                        leading-[129%] max-w-[227px]
                                                    "
                                                >
                                                    Design new user interface design for food delivery app
                                                </p>
                                            </div>

                                            <div className="mt-[12px] flex items-center justify-between">
                                                <div className="flex items-center gap-[30px]">
                                                    <div className="flex items-center gap-[10px]">
                                                        <img src={Attachment} alt="attachments" />
                                                        <p className="text-[14px] font-light font-roboto text-[#6F6F70]">2</p>
                                                    </div>
                                                    <div  className="flex items-center gap-[10px]">
                                                        <img src={Messages} alt="message"  />
                                                        <p className="text-[14px] font-light font-roboto text-[#6F6F70]">15</p>

                                                    </div>
                            
                                                </div>

                                                <div className="flex items-center gap-[5px]">
                                                    <img src={AddIcon} alt="add-icon"/>
                                                    <div className="flex -space-x-1 rtl:space-x-reverse">
                                                        {
                                                            new Array(3).fill(0).map((_, index) => (
                                                                <img
                                                                    className="w-[26px] h-[26px] border-2 border-white rounded-full"
                                                                    src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                                                                    alt="Profile 5"
                                                                />
                                                            ))
                                                        }
                                                       
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
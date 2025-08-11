import { memo, useState } from "react";
import ProjectIcon from '../../assets/Edit-Square1.svg';
import TasksIcon from '../../assets/Edit-Square2.svg';
import WorkLogs from '../../assets/Edit-Square3.svg';
import PerformanceIcon from '../../assets/Edit-Square4.svg';
import SettingsIcon from '../../assets/Edit-Square5.svg';



const SidebarLinks = [
    {
        name:"Project",
        icon:ProjectIcon
    },
    {
        name:"Tasks",
        icon:TasksIcon
    },
    {
        name:"Work Logs",
        icon:WorkLogs
    },
    {
        name:"Performance",
        icon:PerformanceIcon
    },
    {
        name:"Settings",
        icon: SettingsIcon
    }
]

const Sidebar = memo(() => {

    const [tab, selectTab] = useState("Project");

    return(
       <div className="w-[324px] h-full bg-[#F0F6FF] flex flex-col gap-[14px] pt-[16px] pl-[16px]">
        {
            SidebarLinks.map((link, index) => (
                <div 
                    key={index}
                    className={`
                        flex items-center gap-2 w-[270px] h-[49px] px-[16px] cursor-pointer
                        bg-[#F0F6FF] rounded-[4px] ${ link.name===tab && 'shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-semibold'}
                    `}
                    onClick={() => selectTab(link.name)}
                >
                    <img src={link.icon} alt={link.name} />
                    <span className="text-[14px] text-[#5D7285]" style={{fontFamily:"Poppins, sans-serif"}}>{link.name}</span>
                </div>
            ))
        }
       </div>
    )
});

export default Sidebar;
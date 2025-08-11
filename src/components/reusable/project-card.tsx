import { memo } from "react";
import ProfileGroup from "./profile-group";
import Folder from '../../assets/folder-2.png';


const ProjectCard = memo(() => {
    return(
        <>
            <div className="h-[304px] min-w-[465px] bg-[#FFFFFF] p-[16px] rounded-[10px] border border-[gray]">
                <div className="flex justify-between border-b border-[#000000] pb-[16px]">
                    <h2 className="text-[#000000] text-[25px] font-bold" style={{ fontFamily: "Inter, sans-serif"}}>Adoddle</h2>
                    <button className="w-[94px] h-[36px] bg-[#83c29d5e] rounded flex items-center justify-center
                        text-[#21BD1E] text-[12px]
                    "  style={{ fontFamily: "Inter, sans-serif"}}>
                        Completed
                    </button>
                </div>

                <div className="mt-[30px]">
                    <span style={{ fontFamily: "Inter, sans-serif"}} className="text-wrap text-[#424242] text-[13px] leading-[21px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>

                <div className="mt-[24px]">
                    <span style={{ fontFamily: "Inter, sans-serif"}} className="text-[#D62222] text-[14px] font-medium">Deadline :  05 APRIL 2023</span>
                </div>

                <div className="flex justify-between items-center mt-[8px]">
                    <ProfileGroup/>
                    <div className="flex items-center gap-1">
                        <img src={Folder} alt="folder-icon" />
                        <p className="text-[#5C5967] text-[14px] font-medium" style={{ fontFamily: "Inter, sans-serif"}}>14 issues</p>
                    </div>
                </div>
            </div>
        </>
    )
});

export default ProjectCard;
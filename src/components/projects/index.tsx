import { memo } from "react";
import Navbar from "../reusable/Navbar";
import Sidebar from "../reusable/sidebar";
import SearchLogo from '../../assets/search-normal.png';
import ProfileGroup from "../reusable/profile-group";
import Folder from '../../assets/folder-2.png';

const Projects = memo(() => {

    return(
       <div className="h-[100vh] flex flex-col bg-[#83c29d39]">
        <Navbar/>
        <div className="flex h-full">
            <Sidebar/>
            <section id="projects" className="p-[24px] w-[calc(100vw-324px)]">
               <section className="flex justify-between w-full items-center">
                <p className="text-[30px] text-[#0E2040] font-semibold" style={{ fontFamily:"Nunito, sans-serif"}}>Projects</p>
                <div className="relative">
                    <input  
                        style={{ fontFamily: "Inter, sans-serif" }}
                        className="w-[468px] h-[54px] bg-[white] 
                            border border-[#9A93B3] rounded-[6px] outline-none
                            focus:outline-0 placeholder:text-[14px] placeholder:text-[#787486]
                            pl-[48px]
                        " 
                        type="text" name="search" id="search-id" 
                        placeholder="Search for anything..."
                    />
                    <img src={SearchLogo} alt="search-logo" className="absolute top-[14px] left-[16px]" />
                </div>
               </section>

               <section className="h-[calc(100vh-200px)]">
                    <div  className="grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 p-4 h-full overflow-y-auto">
                       {
                        new Array(10).fill(0).map(_ => (
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
                        ))
                       }
                    </div>
               </section>

                {/* Pagination */}
               <section className="w-full h-[34px] bg-red-500 flex items-center justify-center">
                <p>Pagination</p>
               </section>
            </section>
        </div>
       </div>
    )
});

export default Projects;
import { memo } from "react";
import Navbar from "../reusable/Navbar";
import Sidebar from "../reusable/sidebar";
import SearchLogo from '../../assets/search-normal.png';
import ProjectCard from "../reusable/project-card";
import Pagination from "../reusable/pagination";

const Projects = memo(() => {

    return(
       <div className="h-[100vh] flex flex-col bg-[#83c29d39]">
        <Navbar/>
        <div className="flex h-full">
            <Sidebar/>
            <section id="projects" className="p-[24px] pb-0 w-[calc(100vw-324px)]">
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
                            <ProjectCard/>
                        ))
                       }
                    </div>
               </section>

                {/* Pagination */}
                <Pagination totalPages={10} currentPage={5}/>
            </section>
        </div>
       </div>
    )
});

export default Projects;
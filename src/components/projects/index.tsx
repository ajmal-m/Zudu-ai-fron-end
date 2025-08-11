import { memo } from "react";
import Navbar from "../reusable/Navbar";
import Sidebar from "../reusable/sidebar";

const Projects = memo(() => {

    return(
       <div className="h-[100vh] flex flex-col bg-[#a1d1b4]">
        <Navbar/>
        <div className="flex h-full">
            <Sidebar/>
        </div>
       </div>
    )
});

export default Projects;
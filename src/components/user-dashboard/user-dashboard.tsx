import { memo } from "react";
import PieChart from "../reusable/poe-chart";
import Navbar from "../reusable/Navbar";
import Sidebar from "../reusable/sidebar";
import DashboardApp from '../../assets/dashboard-app.svg';
import FIleIcon from '../../assets/file-folder.svg';
import DashboardImage from '../../assets/project-image.svg';
import DownArrow from '../../assets/down-arrow.svg';
import DoughnutChart from "../reusable/dodnut-chart";
import LineChart from "../reusable/two-line-area-chart";


const UserDashboard = memo(() => {
    return(
        <>
        <div className="h-[100vh] flex flex-col bg-[#83c29d39]">
        <Navbar/>
        <div className="flex h-full">
            <Sidebar/>
            <section id="dashboard" className="p-[24px] pb-0 w-[calc(100vw-324px)] h-[calc(100vh-100px)] overflow-y-auto">
              <div className="flex justify-between items-center">
                <h2 className="text-[30px] text-[#0E2040] font-bold font-nunito">Dashboard</h2>
                <img src={DashboardApp} alt="dashboard-app"/>
              </div>

              <div className="flex items-center gap-[16px] mt-[31px]">
                <div className="w-[608px] h-[474px] bg-[#FFFFFF] rounded-[16px] p-[24px] shadow-[0px_2px_11px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center justify-between">
                        <h3 
                            className="
                            text-[26px] text-[#0D062D] 
                            font-semibold font-nunito
                            "
                        >
                            Projects
                        </h3>
                        <div className="flex items-center gap-[9px]">
                            <img src={FIleIcon} alt="file_icon" />
                            <span className="text-[#787486] text-[12px] font-inter">52 files</span>
                        </div>
                    </div>
                    <div>
                        <img src={DashboardImage} alt="dashboard_image" />
                    </div>
                </div>

                <div 
                    className="
                        w-[833px] h-[471px] bg-[#FFFFFF] 
                        shadow-[0px_2px_11px_rgba(0,0,0,0.25)] rounded-[16px] p-[24px]
                        flex flex-col items-center
                    "
                >
                    <div className="flex justify-between items-center self-start w-full">
                        <h2 className="text-[#0E2040] text-[26px] font-semibold font-nunito">Tasks</h2>
                        <button
                            type="button"
                            className="
                                w-[115px] h-[51px] bg-[#23879930]
                                rounded-[6px] font-nunito text-[15px]
                                font-regular text-[#238899] flex items-center
                                gap-[10px] justify-center cursor-pointer
                            "
                        >
                            This Week
                            <img src={DownArrow} alt="down_arrow"/>
                        </button>
                    </div>
                    <PieChart/>
                </div>
              </div>

              <div className="flex items-center gap-[16px] mt-[12px]">
                <div className="w-[608px] h-[474px] bg-[#FFFFFF] flex items-center flex-col  rounded-[16px] p-[24px] shadow-[0px_2px_11px_rgba(0,0,0,0.25)]">
                    <div className="flex justify-between items-center self-start w-full">
                        <h2 className="text-[#0E2040] text-[26px] font-semibold font-nunito">Tasks</h2>
                        <button
                            type="button"
                            className="
                                w-[115px] h-[51px] bg-[#23879930]
                                rounded-[6px] font-nunito text-[15px]
                                font-regular text-[#238899] flex items-center
                                gap-[10px] justify-center cursor-pointer
                            "
                        >
                            Work Log
                            <img src={DownArrow} alt="down_arrow"/>
                        </button>
                    </div>
                    <DoughnutChart/>
                </div>

                <div
                    className="
                        w-[833px] h-[471px] bg-[#FFFFFF] 
                        shadow-[0px_2px_11px_rgba(0,0,0,0.25)] rounded-[16px] p-[24px]
                        flex flex-col items-center
                
                    "
                >
                    <LineChart/>
                </div>
              </div>
            </section>
        </div>
       </div>
        </>
    )
});

export default UserDashboard;
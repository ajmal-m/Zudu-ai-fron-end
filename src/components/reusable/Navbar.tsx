import { memo } from "react";
import Logo from '../../assets/logo.svg';
import SearchLogo from '../../assets/search-normal.png';
import NotificationIcon from '../../assets/notification.svg';

const Navbar = memo(() => {

    return(
        <nav 
            className="
                h-[90px] w-full bg-[#FFFFFF] flex items-center
                px-6 justify-between z-50
            " 
            style={{ boxShadow:"0 4px 4px rgba(0, 0, 0, 0.25)"}}
        >
            <div className="flex items-center gap-[16px]">
                <img src={Logo} alt="app-logo" />
                <p className="text-[#0B3051] font-semibold text-[25px]">VProjectO</p>
            </div>

            <div className="flex items-center gap-[31px]">
                <div className="relative">
                    <input  
                        style={{ fontFamily: "Inter, sans-serif" }}
                        className="w-[417px] h-[44px] bg-[white] 
                            border border-[#9A93B3] rounded-[6px] outline-none
                            focus:outline-0 placeholder:text-[14px] placeholder:text-[#787486]
                            pl-[48px]
                        " 
                        type="text" name="search" id="search-id" 
                        placeholder="Search for anything..."
                    />
                    <img src={SearchLogo} alt="search-logo" className="absolute top-[11px] left-[16px]" />
                </div>

                <div>
                    <img src={NotificationIcon} alt="Notification-Icon" />
                </div>

                <div className="flex items-center">
                    <div className="flex flex-col">
                        <p className="text-[#0D062D] text-[16px] w-[140px] truncate" style={{ fontFamily: "Inter, sans-serif" }}>Anima Agrawal</p>
                        <p className="text-[#787486] text-[14px] w-[100px] truncate" style={{ fontFamily: "Inter, sans-serif" }}>U.P, India</p>
                    </div>
                    <div>
                        <img className="w-[50px] h-[50px] rounded-[44px] object-cover" src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile-photo"  />
                    </div>
                </div>
            </div>
        </nav>
    )
});

export default Navbar;
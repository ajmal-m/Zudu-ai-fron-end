import { memo } from "react";
import { FloatInput } from "./float-input";
import AppLogo from '../../assets/logo.svg';
import LoginLogo from '../../assets/logIn-image.png';

const Login = memo(() => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return(
        <div>
            <nav className="pt-[34px] px-[20px] flex gap-[15px] items-center">
                <img src={AppLogo} alt="logo-svg" />
                <h2 className="text-[#0B3051] text-[25px] font-semibold">VProject0</h2>
            </nav>

            <section className="mt-[15px] flex items-center gap-[87px] justify-center">
                <img src={LoginLogo} alt="login-logo" />

                <div>
                    <h3 style={{ fontFamily: 'Manrope, sans-serif' }} className="text-[#000000] text-[36px] font-semibold">Welcome back, Yash </h3>
                    <p className="text-[#000000] text-[20px] mt-[14px]" style={{ fontFamily: '"Space Grotesk", sans-serif'}}>Welcome back! Please enter your details.</p>

                    <form onSubmit={handleSubmit} className="mt-[42px]">
                        <FloatInput label="Email" name="Email" type="Email"/>
                        <FloatInput label="Password" name="password" type="password"/>
                        <div className="mt-[27px] flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="term" id="term" className="w-[18px] h-[18px] bg-[#FFFFFF] border-[#D5D5D5] dark:bg-[#FFFFFF] dark:border-[#D5D5D5]" />
                                <p className="text-[#000000] text-[15px]" style={{ fontFamily: '"Space Grotesk", sans-serif'}}>Terms & Conditions </p>
                            </div>
                            <div>
                                <p className="text-[#000000] text-[15px] cursor-pointer underline" style={{ fontFamily: '"Space Grotesk", sans-serif'}}>Forgot Password</p>
                            </div>
                        </div>
                        <button type="submit" style={{ fontFamily: '"Space Grotesk", sans-serif'}} className="cursor-pointer mt-[36px] bg-[#060606] rounded-[6px] w-[430px] h-[60px] flex items-center justify-center text-[white] font-bold text-[16px]">
                            Login
                        </button>
                    </form>

                    <div className="mt-[36px] flex items-center justify-center">
                        <p style={{ fontFamily: '"Space Grotesk", sans-serif'}} className="text-[#000000] text-[12px]">Don’t have an account?</p><span  style={{ fontFamily: '"Space Grotesk", sans-serif'}} className="ml-[8px] font-medium underline cursor-pointer">Sign up for free</span>
                    </div>
                </div>
            </section>
        </div>
    );
});

export default Login;
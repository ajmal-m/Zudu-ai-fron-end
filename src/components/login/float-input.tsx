import { memo, useState } from "react";
import { useLoginStore } from "../../store/useLoginStore";


export const FloatInput = memo(({ label, type, name } : { label: string; type:string; name:string;}) => {
    const [isFocused, setFocused] = useState(false);
    const {updateUserData, userData} = useLoginStore();


    const handleBlur = () => {
        if (userData[name] === "") setFocused(false);
    };
    return(
        <>
            <div className="relative mb-6">
                <input
                    type={type}
                    name={name}
                    id={name}
                    className="w-full border-b-2 border-[#A69999] focus:border-blue-500 outline-none bg-transparent pt-6 pb-1 text-sm"
                    onFocus={() => setFocused(true)}
                    onBlur={handleBlur}
                    value={userData[name]}
                    onChange={(e) => updateUserData({ name, value:e.target.value}) }
                />
                <label
                    className={`absolute left-0 text-sm transition-all duration-200 text-[20px] text-[#000000] ${
                    isFocused 
                        ? "text-xs -top-1"
                        : "top-4 text-sm"
                    }`}
                    style={{ fontFamily: '"Space Grotesk", sans-serif'}}
                >
                    {label}
                </label>
            </div>
        </>
    )
})
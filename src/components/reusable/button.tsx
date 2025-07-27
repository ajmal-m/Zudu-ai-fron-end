import { memo } from "react";

type ButtonProps={
    type:"submit" | "reset" | "button" | undefined;
    children:any;
    onClick?:() => void;
    className?:string;
}


const defaultButtonClass=`text-white bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 
                    font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
                    text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                    dark:focus:ring-blue-800 cursor-pointer`;

const Button = memo(({ type, children, onClick , className = defaultButtonClass  } : ButtonProps) => {
    return(
        <>
            <button
                type={type}
                className={className}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
});

export default Button;
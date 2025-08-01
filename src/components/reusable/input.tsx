import { memo } from "react";

type InputProps={
    type:string;
    name:string;
    value:string;
    placeholder:string;
    updateChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = memo(({ type , name , value, updateChange , placeholder} : InputProps) => {
    return(
        <>
        <input
            type={type}
            id={name}
            name={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
            required
            value={value}
            onChange={updateChange}
        />
        </>
    )
});

export default Input;
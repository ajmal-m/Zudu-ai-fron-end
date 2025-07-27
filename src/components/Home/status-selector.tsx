
import { memo } from "react";

type InputProps={
    updateChange:(e: any) => void;
    options:{name:string;value:string;}[];
    label:string;
}

const StatusSelector = memo(({  options, updateChange , label} : InputProps) => {
    return(
        <>
        <select 
            className="
                bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500
                w-[200px]
            "
            onChange={updateChange}
        >
            <option selected value={''}>{label}</option>
            {
                options.map((option, index) => (
                    <option value={option.value} key={index}>{option.name}</option>
                ))
            }
        </select>
        </>
    )
});

export default StatusSelector;
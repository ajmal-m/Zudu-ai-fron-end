
import { memo } from "react";

type InputProps={
    label:string;
    name:string;
    value:string;
    placeholder:string;
    updateChange:(e: React.ChangeEvent<HTMLSelectElement>) => void;
    options:{name:string;email:string;_id:string;}[]
}

const AssigneeSelector = memo(({ label, name, options, updateChange, value } : InputProps) => {
    return(
        <>
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <select 
            id={name} 
            className="
                bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500
            "
            onChange={updateChange}
            value={value}
            name={name}
        >
            <option selected value={''}>{label}</option>
            {
                options.map((option, index) => (
                    <option value={option._id} key={index}>{option.name}</option>
                ))
            }
        </select>
        </>
    )
});

export default AssigneeSelector;
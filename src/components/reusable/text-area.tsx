import { memo } from "react";

type TextAreaProps={
    name:string;
    value:string;
    placeholder:string;
    updateChange:(e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = memo(({  name, placeholder, value, updateChange } : TextAreaProps) => {
    return(
        <>
            <textarea
              id={name}
              name={name}
              placeholder={placeholder}
              onChange={updateChange}
              value={value}
              className="
                block p-2.5 w-full text-sm text-gray-900 bg-gray-50 
                rounded-lg border border-gray-300 focus:ring-blue-500 
                focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white"
            />
        </>
    )
});

export default TextArea;
import { memo } from "react";

type LableProps = {
    type: string;
    text:string;
}

const Label = memo(({ type , text } : LableProps) => {
    return(
        <>
            <label
                htmlFor={type}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {text}
            </label>
        </>
    )
});

export default Label;
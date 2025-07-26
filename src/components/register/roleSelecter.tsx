import { memo } from "react";

type RoleSelectorType = {
    updateChange:(e: any) => void;
    value:string;
}

const RoleSelector = memo(({ updateChange, value } : RoleSelectorType) => {
    return(
        <>
            <select 
                id="role" 
                name="role"
                className="
                    bg-gray-50 border border-gray-300 text-gray-900 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                    dark:focus:border-blue-500
                "
                onChange={updateChange}
                value={value}
            >
                <option selected value={''}>Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
        </>
    )
});

export default RoleSelector;
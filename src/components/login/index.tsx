import { memo, useCallback, useState } from "react";
import Label from "../reusable/label";
import Input from "../reusable/input";
import Button from "../reusable/button";
import toast from 'react-hot-toast';

const Login = memo(() => {

    const [formData, setFormData] = useState<{ email: string; password: string;}>({
        email: "",
        password: "",
    });

    const handleChange = useCallback((e: { target: { name: any; value: any; }; }) => {
        const { name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }, [formData]);


    const handleSubmit = useCallback((e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData); 
        toast.success("Hello Guys")
    }, [formData]);

    return(
        <>
        <form 
            className="
                max-w-sm mx-auto w-full p-4 bg-white border 
                border-gray-200 rounded-lg shadow-sm sm:p-6 
                md:p-8 dark:bg-gray-800 dark:border-gray-700
            " 
            onSubmit={handleSubmit}
        >
            <div className="mb-5">
                <Label type="email" text="Your email"/>
                <Input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    updateChange={handleChange} 
                    placeholder="abc@gmail.com"
                />
            </div>

            <div className="mb-5">
                <Label  type="password" text="Your password"/>
                <Input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    updateChange={handleChange} 
                    placeholder="password"
                />
            </div>

            <Button type="submit">
                Login
            </Button>

        </form>
        </>
    )
});

export default Login;
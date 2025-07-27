import { memo, useCallback, useState } from "react";
import Label from "../reusable/label";
import Input from "../reusable/input";
import Button from "../reusable/button";
import toast from 'react-hot-toast';
import RoleSelector from "./roleSelecter";
import axiosInstance from "../../lib/axios";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

type FormDatasType = {
    name:string; 
    email: string; 
    password: string;
    confirmPassword:string;
    role:string
}

const Register = memo(() => {

    const {login} = useAuth();

    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormDatasType>({
        name:"",
        email: "",
        password: "",
        confirmPassword:'',
        role:''
    });

    const handleChange = useCallback((e: { target: { name: any; value: any; }; }) => {
        const { name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }, [formData]);


    const handleSubmit = useCallback(async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formValidated = formValidation(formData);
        if(formValidated){
            try {
                const {data} = await axiosInstance.post('/auth/register', {
                    name:formData.name,
                    email:formData.email,
                    password:formData.password,
                    role:formData.role
                });
                login(data);
                navigate('/');
            } catch (error : any) {
                const errorMessage = error?.response?.data?.message;
                errorMessage && toast.error(errorMessage);
            }
        }
    }, [formData]);


    const formValidation= useCallback((values: FormDatasType) => {
        let formValidated = true;
        if (!values.name.trim()) {
            formValidated = false;
            toast.error("Name is required");
        }

        if (!values.email.trim()) {
            formValidated = false;
            toast.error("Email is required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            formValidated = false;
            toast.error("Invalid email format");
        }

        if (!values.password) {
            formValidated = false;
            toast.error("Password is required");
        }

        if (!values.confirmPassword) {
            formValidated = false;
            toast.error("Confirm Password is required");
        } else if (values.password !== values.confirmPassword) {
            formValidated = false;
            toast.error("Passwords do not match");
        }

        if (!values.role.trim()) {
            formValidated = false;
            toast.error("Role is required");
        }

        return formValidated;

    }, [formData])

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
                <Label type="name" text="Your name"/>
                <Input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    updateChange={handleChange} 
                    placeholder="Enter your name"
                />
            </div>


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
                <Label  type="text" text="Select Role"/>
                <RoleSelector 
                    value={formData.role}
                    updateChange={handleChange}
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

            <div className="mb-5">
                <Label  type="password" text="Confirm your password"/>
                <Input 
                    type="password" 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    updateChange={handleChange} 
                    placeholder="confirm password"
                />
            </div>

            <Button type="submit">
                Register
            </Button>

        </form>
        </>
    )
});

export default Register;
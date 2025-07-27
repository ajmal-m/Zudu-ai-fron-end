import { memo } from "react";
import AuthLayout from "../layouts/mainLayout";
import Register from "../components/register";


const RegisterPage = memo(() => {

  return (
   <AuthLayout>
    <Register/>
   </AuthLayout>
  );
});

export default RegisterPage;

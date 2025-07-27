import { memo } from "react";
import AuthLayout from "../layouts/mainLayout";
import Login from "../components/login";


const LoginPage = memo(() => {

  return (
   <AuthLayout>
    <Login/>
   </AuthLayout>
  );
});

export default LoginPage;

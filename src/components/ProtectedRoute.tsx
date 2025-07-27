import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ children }:{ children : any}) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

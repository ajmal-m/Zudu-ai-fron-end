import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../lib/axios";

// 1. Define user type (adjust fields as per your API)
export interface User {
  _id: string;
  name: string;
  email: string;
}

// 2. Define context value type
interface UserContextType {
  users: User[];
  setUsers: (users: User[]) => void;
  loading: boolean;
}

// 3. Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// 4. Provider component
export const UserProvider = ({ children }: { children: any }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get("/users");
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, loading }}>
      {children}
    </UserContext.Provider>
  );
};

// 5. Hook for using context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

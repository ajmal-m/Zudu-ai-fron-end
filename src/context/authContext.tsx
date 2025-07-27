import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "../lib/axios";

// Define your User type
type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  token?: string | null; // optional: JWT or similar
};

// Context value shape
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  accessToken: string | null;
}

// Create context with default empty object
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider props type
interface AuthProviderProps {
  children: any;
}

// Provider implementation
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('token'));


  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosInstance.get('/auth/refresh');
        console.log(data)
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('authUser', data.user);
        setUser(data.user ?? null)
        setAccessToken(data?.accessToken);
      } catch {
        setAccessToken(null);
      }
    })();
    setLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    setAccessToken(userData.token ?? null);
    localStorage.setItem("authUser", JSON.stringify(userData));
    localStorage.setItem("token", JSON.stringify(userData?.token));
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("authUser");
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    accessToken
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

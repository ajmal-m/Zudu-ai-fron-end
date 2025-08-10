import  { createContext, useContext, useState, useEffect, useCallback } from "react";
import { type TaskResponse } from "../Types";
import axiosInstance from "../lib/axios";

interface TaskContextType {
  page: number;
  limit: number;
  totalPages: number;
  tasks: any[];
  loading: boolean;
  status: string | null;
  order: string | null;
  setPage: (page: number) => void;
  setTotalPages: (total: number) => void;
  setTasks: (tasks: any[]) => void;
  setLoading: (loading: boolean) => void;
  setStatus: (status: string | null) => void;
  setOrder: (order: string | null) => void;
  getAllTasks: () => void;
}

// 2. Create the context with default (empty) values
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// 3. Provider component
export const TaskProvider = ({ children }: { children: any }) => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [tasks, setTasks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState<string | null>(null);
    const [order, setOrder] = useState<string | null>(null);


    const getAllTasks = useCallback(async () => {
        setLoading(true);
        try {
            let query = `page=${page}&limit=${limit}`;
            if(status){
                query+=`&status=${status}`;
            }
            if(order){
                query += `&order=${order}`;
            }
            const {data} : {data: TaskResponse} = await axiosInstance.get(`/tasks?${query}`);
            if(data?.data?.length === 0 && page > 1){
                setPage(page-1);
                return
            }
            setTasks([ ...data?.data]);
            setTotalPages(data.totalPages);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, [page, limit, status, order]);


    useEffect(() => {
        getAllTasks();
    }, [page, limit, status, order])  

    return (
      <TaskContext.Provider
        value={{
          page,
          limit,
          totalPages,
          tasks,
          loading,
          status,
          order,
          setPage,
          setTotalPages,
          setTasks,
          setLoading,
          setStatus,
          setOrder,
          getAllTasks
        }}
      >
        {children}
      </TaskContext.Provider>
    );
};

// 4. Hook for easier consumption
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

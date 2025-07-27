import { memo, useEffect, useState } from "react";
import Card from "../card";
import Pagination from "../pagination";
import CreateTask from "../create-task";
import { useAuth } from "../../context/authContext";
import axiosInstance from "../../lib/axios";
import type {  TaskResponse } from "../../Types";
import  { Spinner } from "../reusable/loader";
import Selector from "./status-selector";
import Button from "../reusable/button";
import RightDrawer from "./filters";


const STATUS_OPTIONS = [
  { name: 'To Do', value: 'ToDo' },
  { name: 'In Progress', value: 'InProgress' },
  { name: 'Done', value: 'Done' },
];

const SORT_OPTIONS = [
  { name: 'dueDate', value: 'dueDate' },
  { name: 'priority', value: 'priority' },
];

const Home = memo(() => {

    const {logout} = useAuth();
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [tasks, setTasks] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string | null>(null);
    const [order, setOrder] = useState<string | null>(null);



    useEffect(() => {
        const getAllTasks = async () => {
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
                setTasks([ ...data?.data]);
                setTotalPages(data.totalPages);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }

        getAllTasks();
    }, [page, limit, status, order])

    return(
        <div className="flex flex-col h-screen">
            <div className="flex justify-center flex-wrap gap-4 dark:bg-[#111827] h-[95vh] overflow-y-auto py-4">
                {

                    loading ? (<Spinner/>):(
                        tasks.length > 0 ? (
                            tasks.map((task,i) => (
                                <Card key={i} task={task}/>
                            ))
                        ) : (
                            <img src="https://static.thenounproject.com/png/1735753-200.png" width={300} height={100} alt="EmptyBox" />
                        )
                    )
                }
            </div>
            <div className="p-4 dark:bg-[#111827] flex gap-5 items-center flex-wrap">
                <CreateTask/>
                <Selector updateChange={(e) => setStatus(e.target.value)} options={STATUS_OPTIONS} label="Filter By status"/>
                <Selector updateChange={(e) => setOrder(e.target.value)} options={SORT_OPTIONS} label="Sort By"/>
                <Button type="button" onClick={logout}>
                     Logout
                </Button>
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing page {page} of {totalPages} pages
                </span>
                <Pagination 
                    totalPages={totalPages} 
                    page={page} 
                    nextPage={() => setPage(page => page+1)} 
                    prevPage={() => setPage(page => page-1)}
                />
            </div>
        </div>
    )
});

export default Home;
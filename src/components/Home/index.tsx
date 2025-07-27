import { memo } from "react";
import Card from "../card";
import Pagination from "../pagination";
import CreateTask from "../create-task";
import { useAuth } from "../../context/authContext";
import  { Spinner } from "../reusable/loader";
import Selector from "./status-selector";
import Button from "../reusable/button";
import { useTaskContext } from "../../context/taskContext";
import { useTheme } from "../../context/theme-context";
import DarkIcon from "../icon/dark";
import LightIcon from "../icon/light";


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
    const {loading, tasks, setStatus, page, totalPages, setPage, setOrder} = useTaskContext();
    const {theme} = useTheme();

    return(
        <div className="flex flex-col h-screen dark:bg-[#111827] justify-between">
            <div className="flex justify-center flex-wrap gap-4 dark:bg-[#111827] overflow-y-auto py-4">
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
                <span className="text-sm text-[black] dark:text-gray-400">
                    Showing page {page} of {totalPages} pages
                </span>
                <Pagination 
                    totalPages={totalPages} 
                    page={page} 
                    nextPage={() => setPage(page + 1)} 
                    prevPage={() => setPage(page - 1)}
                />
                {
                    theme === 'dark' ? <DarkIcon/> : <LightIcon/>
                }
            </div>
        </div>
    )
});

export default Home;
import { memo } from "react";
import Card from "../card";
import Pagination from "../pagination";

const Home = memo(() => {


    return(
        <div className="flex flex-col h-screen">
            <div className="flex justify-center flex-wrap gap-4 dark:bg-[#111827] h-[95vh] overflow-y-auto py-4">
                {
                    new Array(100).fill(0).map((_,i) => (
                        <Card key={i}/>
                    ))
                }
            </div>
            <div className="p-4 dark:bg-[#111827]">
                <Pagination/>
            </div>
        </div>
    )
});

export default Home;
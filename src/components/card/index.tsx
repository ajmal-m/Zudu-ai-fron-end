import { memo } from "react";
import Badge from "../reusable/badge";
import Button from "../reusable/button";

const Card = memo(() => {


    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                {/* Title */}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>

                {/* Description */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in
                    reverse chronological order.
                </p>

                {/* Details */}
                <div className="text-sm text-gray-800 dark:text-gray-300 space-y-1 mb-4">
                    <p>
                        <span className="font-semibold">Assignee:</span> Jane Doe
                    </p>
                    <p>
                        <span className="font-semibold">Status:</span>{" "}
                        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                        In Progress
                        </span>
                    </p>
                    <p>
                        <span className="font-semibold">Priority:</span>{" "}
                        <Badge priority="high" label="high"/>
                    </p>
                    <p>
                        <span className="font-semibold">Due Date:</span> Aug 15, 2025
                    </p>
                    <p>
                        <span className="font-semibold">Managed By:</span> John Smith
                    </p>
                </div>

                {/* Action Button */}
                <Button type="button">
                    Read more
                </Button>
            </div>
        </div>
    )
});

export default Card;
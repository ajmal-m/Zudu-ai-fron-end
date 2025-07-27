import { memo, useState } from "react";
import Button from "../reusable/button";

const RightDrawer = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Drawer toggle button */}
      <div className="text-center">
        <Button 
            type="button" 
            className="text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
            text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
            focus:outline-none dark:focus:ring-blue-800"
        >
          Show right drawer
        </Button>
      </div>

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-labelledby="drawer-right-label"
      >

        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

      </div>
    </>
  );
});

export default RightDrawer;

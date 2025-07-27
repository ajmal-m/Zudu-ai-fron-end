import { memo, type ReactNode } from "react";


const MainLayout = memo(({ children }: { children : ReactNode}) => {

  return (
    <div className="h-screen flex flex-col items-center justify-center dark:bg-[#111827]">
        {children}
    </div>
  );
});

export default MainLayout;

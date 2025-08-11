import { memo } from "react";


type PaginationType = {
    totalPages:number;
    currentPage:number;
    pageNeighbours?:number
}

const Pagination = memo(({ totalPages, currentPage, pageNeighbours = 1} : PaginationType) => {
     const getPaginationPages = () => {
    const pages = [];

    const startPage = Math.max(currentPage - pageNeighbours, 2);
    const endPage = Math.min(currentPage + pageNeighbours, totalPages - 1);

    pages.push(1); // Always show first page

    if (startPage > 2) {
      pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPaginationPages();
    return(
        <>
            <section className="w-full h-[34px]  flex items-center justify-center">
                <div className="flex items-center justify-center gap-3">
                    <p className="text-[12px] text-[#9E9E9E] font-medium" style={{ fontFamily:"Montserrat, sans-serif"}}>Previous</p>
                    {
                        pages.map((page, index) =>{
                            return(
                                page === "..." ? (<span key={index} className="text-[12px] text-[#000000] font-medium" style={{ fontFamily:"Montserrat, sans-serif"}}>. . .</span>) : (
                                    <button 
                                        type="button" 
                                        className={`
                                            w-[31px] h-[31px] rounded-[8px] flex justify-center 
                                            items-center cursor-pointer
                                            ${page === currentPage ? 'bg-[#0A3B83]' : 'bg-[#E0E0E0]'}
                                        `}
                                        key={index}
                                    >
                                        <span 
                                            className={`text-[12px] font-medium ${ page === currentPage && 'text-[#FFFFFF]'}`}

                                            style={{ fontFamily:"Montserrat, sans-serif"}}
                                        >
                                            {page}
                                        </span>
                                    </button>
                                )
                            )
                        } )
                    }
                    <p className="text-[12px] text-[#9E9E9E] font-medium cursor-pointer" style={{ fontFamily:"Montserrat, sans-serif"}}>Next</p>
                </div>
            </section>
        </>
    )
});

export default Pagination;
import React, { useContext } from "react";
import { AppContext } from "../context/Appcontext";

function Pagination(){
    const {page,handlePageChange,totalPages} = useContext(AppContext);
    return (
        <div className="w-full flex justify-center items-center border-2 drop-shadow-md fixed bg-white bottom-0">
        <div className="flex justify-between w-11/12 max-w-[670px] py-2">
            <div className="flex gap-x-2">
                {
                    (page>1) && (<button onClick={() => handlePageChange(page-1)}
                                className="rounded-md border-2 py-2 px-1 border-gray-300">Previous</button>)
                }
                {
                    (page < totalPages) && (<button className="rounded-md border-2 py-2 px-1 border-gray-300" onClick={() => handlePageChange(page+1)}>Next</button>)
                }
            </div>
            
            <p className="font-bold text-sm">
                page {page} of {totalPages}
            </p>
        </div>
        </div>
    );
}
export default Pagination;
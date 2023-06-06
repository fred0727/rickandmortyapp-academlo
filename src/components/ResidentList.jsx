import React, { useEffect, useState } from "react";
import Resident from "./Resident";
import { paginationLogic } from "../utils/pagination";

const FIRST_PAGE = 1;

const ResidentList = ({ residents, location }) => {
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setCurrentPage(FIRST_PAGE);
  }, [location]);

  return (
    <div className="sm:px-4 sm:mt-10">
      <section className="grid gap-10 grid-cols-[repeat(auto-fill,_250px)] justify-center mt-5">
        {residentsInPage?.map((resident) => (
          <Resident resident={resident} key={resident} />
        ))}
      </section>
      <section className="flex justify-center my-6 px-6 xss:px-10">
        <div className="w-[250px] flex overflow-x-auto overflow-hidden gap-1 py-3 sm:w-auto sm:gap-2 sm:py-5">
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={`p-2 px-3 rounded-md cursor-pointer sm:p-5 sm:text-xl ${
                currentPage === page
                  ? "bg-secondary-green text-black font-bold"
                  : "bg-opac-bg border-[1px] border-primary-green"
              }`}
              key={page}
            >
              {page}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResidentList;

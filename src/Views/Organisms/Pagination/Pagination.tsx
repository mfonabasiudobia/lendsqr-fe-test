import React, { useEffect, useState } from "react";
import { IconButton } from "@/Views/Atoms";
import ReactPaginate from "react-paginate";

interface PaginationModel {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  paginate: (res: number) => void;
  size: (postSize: number) => void;
}

const Pagination: React.FC<PaginationModel> = ({
  postsPerPage,
  totalPosts,
  paginate,
  size,
  currentPage,
}) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const handlePageClick = (event: any) => paginate(event.selected);

  useEffect(() => {
    let numbers: number[] = [];
    for (let i: number = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      numbers.push(i);
    }

    return () => setPageNumbers(numbers);
  }, [currentPage]);

  return (
    <div className="py-2 flex justify-between">
      <div>
        <p className="text-sm text-primary space-x-2">
          <span>Showing</span>
          <select
            onChange={(e) => size(parseInt(e.target.value))}
            className="font-medium px-3 py-2 bg-lightblue rounded-1 border-0"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span>out of {totalPosts} </span>
        </p>
      </div>
      <nav className="block">
        <div>
          <ReactPaginate
            breakLabel="..."
            pageClassName="cursor-pointer"
            nextLabel={
              <IconButton
                type="bs"
                size="sm"
                className="bg-lightblue p-1 rounded-1"
                variant="contained"
                name="BsChevronRight"
              />
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageNumbers.length}
            className="flex items-center space-x-3 text-primary"
            previousLabel={
              <IconButton
                type="bs"
                size="sm"
                className="bg-lightblue p-1 rounded-1"
                variant="contained"
                name="BsChevronLeft"
              />
            }
            renderOnZeroPageCount={null}
          />
        </div>
      </nav>
    </div>
  );
};

export default Pagination;

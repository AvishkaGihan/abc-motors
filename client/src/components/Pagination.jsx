import React from "react";

function Pagination() {
  return (
    <div className="flex items-center justify-between mt-4">
      {/* Pagination Controls */}
      <div className="flex items-center">
        <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-l-md hover:bg-gray-50">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <button className="flex items-center justify-center w-10 h-10 border-t border-b border-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100">
          1
        </button>

        <button className="flex items-center justify-center w-10 h-10 border-t border-b border-gray-300 text-blue-600 bg-blue-50 font-medium">
          2
        </button>

        <button className="flex items-center justify-center w-10 h-10 border-t border-b border-gray-300 text-gray-700 hover:bg-gray-100">
          3
        </button>

        <div className="flex items-center justify-center w-10 h-10 border-t border-b border-gray-300 text-gray-500">
          ...
        </div>

        <button className="flex items-center justify-center w-10 h-10 border-t border-b border-r border-gray-300 text-gray-700 hover:bg-gray-100">
          100
        </button>

        <button className="flex items-center justify-center w-10 h-10 border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-50">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Pagination Info */}
      <div className="text-sm text-gray-500">Showing 1-10 of 1000</div>
    </div>
  );
}

export default Pagination;

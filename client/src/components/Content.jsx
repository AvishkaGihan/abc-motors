import Table from "./Table";
import Pagination from "./Pagination";

function Content({ activePage }) {
  return (
    <div className="flex-1 overflow-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Company Master Files
          </h1>
          <p className="text-gray-500">Manage Master and holding companies.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 border rounded-md bg-white text-gray-700">
            Export
          </button>
          <button className="flex items-center px-4 py-2 rounded-md bg-blue-600 text-white">
            Add New Company
          </button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex items-center justify-between mt-6 mb-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 border border-gray-500 rounded-md bg-white text-gray-500">
            Filter
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-500 rounded-md bg-white text-gray-500">
            Sort
          </button>
        </div>
      </div>

      {/* Table Section */}
      <Table />

      {/* Pagination Section */}
      <Pagination />
    </div>
  );
}

export default Content;

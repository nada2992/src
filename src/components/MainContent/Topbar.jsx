import React from "react";
import { FiList, FiGrid } from "react-icons/fi";

const TopBar = ({ view, setView }) => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">My Drive</h2>
    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white blue dark:bg-gray-800">
      <div
        className={`px-1 py-0.5 ${
          view === "list" ? "bg-blue-100 dark:bg-gray-700" : ""
        }`}
      >
        <button
          onClick={() => setView("list")}
          className={`flex items-center px-3 py-1 gap-2 transition ${
            view === "list"
              ? "text-blue-600 dark:text-gray-400"
              : "text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          <FiList size={16} />
        </button>
      </div>
      <div
        className={`px-1 py-0.5 ${
          view === "grid" ? "bg-blue-100 dark:bg-gray-700 " : ""
        }`}
      >
        <button
          onClick={() => setView("grid")}
          className={`flex items-center px-3 py-1 gap-2 transition ${
            view === "grid"
              ? "text-blue-600 dark:text-gray-400"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <FiGrid size={16} />
        </button>
      </div>
    </div>
  </div>
);

export default TopBar;

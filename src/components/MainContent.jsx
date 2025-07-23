import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiList, FiGrid } from "react-icons/fi";
import { HiOutlineSelector } from "react-icons/hi";
import { IoMdArrowDropup } from "react-icons/io";
import { FaFolder, FaFileExcel, FaUserFriends } from "react-icons/fa";

const files = [
  { name: "Colab Notebooks", type: "folder", owner: "me", modified: "26 Feb 2024", size: "" },
  { name: "Cv", type: "folder", owner: "me", modified: "17 Feb 2024", size: "" },
  { name: "Meeting", type: "folder", owner: "me", modified: "14 Oct 2024", size: "" },
  { name: "Mini group", type: "folder", owner: "me", modified: "9 Oct 2024", size: "" },
  { name: "Quality 5", type: "excel", owner: "me", modified: "11 Feb", size: "3.4 MB" },
  { name: "Assistant 2023", type: "excel-shared", owner: "me", modified: "4 Jul 2023", size: "5 KB" },
  { name: "Copy of New Quality1 - 9 February, 22:08", type: "excel", owner: "me", modified: "11 Feb", size: "3.5 MB" },
];

const MainContent = ({ search, onFileClick }) => {
  const [view, setView] = useState("list");
  const [selectedType, setSelectedType] = useState("all");
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const fileTypeOptions = ["all", "folder", "excel", "excel-shared"];

  const filteredFiles = files.filter((file) => {
    const matchesType = selectedType === "all" || file.type === selectedType;
    const matchesSearch = !search || file.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="px-6 py-3 text-sm text-gray-800 bg-white rounded-2xl relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Drive</h2>
       <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white">
  {/* List View Button */}
  <div className={`px-1 py-0.5 ${view === "list" ? "bg-blue-100" : ""}`}>
    <button
      onClick={() => setView("list")}
      className={`flex items-center px-3 py-1 gap-2 transition ${
        view === "list" ? "text-blue-600" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <FiList size={16} />
    </button>
  </div>

  {/* Grid View Button */}
  <div className={`px-1 py-0.5 ${view === "grid" ? "bg-blue-100 " : ""}`}>
    <button
      onClick={() => setView("grid")}
      className={`flex items-center px-3 py-1 gap-2 transition ${
        view === "grid" ? "text-blue-600" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <FiGrid size={16} />
    </button>
  </div>
</div>



      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-4 relative">
        {/* Type Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowTypeDropdown(!showTypeDropdown)}
            className="border px-4 py-1 rounded hover:bg-gray-100"
          >
            Type ▾
          </button>
          {showTypeDropdown && (
            <div className="absolute z-10 bg-white border rounded shadow w-40 mt-1">
              {fileTypeOptions.map((type) => (
                <div
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setShowTypeDropdown(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    selectedType === type ? "bg-gray-200 font-semibold" : ""
                  }`}
                >
                  {type === "all" ? "All Types" : type}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Static Filters */}
        {["People", "Modified", "Source"].map((filter) => (
          <button key={filter} className="border px-4 py-1 rounded hover:bg-gray-100">
            {filter}
          </button>
        ))}
      </div>

      {/* Conditional View Rendering */}
      {view === "list" ? (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-12 items-center py-2 border-b font-medium text-gray-600">
            <div className="col-span-5 flex items-center gap-1">
              <span>Name</span>
              <IoMdArrowDropup size={18} className="text-blue-600" />
            </div>
            <div className="col-span-2">Owner</div>
            <div className="col-span-3">Date modified</div>
            <div className="col-span-1">File size</div>
            <div className="col-span-1 text-right">
              <HiOutlineSelector />
            </div>
          </div>

          {/* File List */}
          {filteredFiles.map((file, index) => (
            <div
              key={index}
              onClick={() => onFileClick(file)}
              className="grid grid-cols-12 items-center py-2 hover:bg-gray-100 cursor-pointer border-b"
            >
              <div className="col-span-5 flex items-center gap-2">
                {file.type === "folder" && <FaFolder className="text-yellow-500" />}
                {file.type === "excel" && <FaFileExcel className="text-green-600" />}
                {file.type === "excel-shared" && (
                  <>
                    <FaFileExcel className="text-green-600" />
                    <FaUserFriends className="text-gray-500" />
                  </>
                )}
                <span>{file.name}</span>
              </div>
              <div className="col-span-2 flex items-center gap-2">
                <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  n
                </div>
                <span>{file.owner}</span>
              </div>
              <div className="col-span-3">{file.modified}</div>
              <div className="col-span-1">{file.size || "—"}</div>
              <div className="col-span-1 text-right">
                <BsThreeDotsVertical />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredFiles.map((file, index) => (
            <div
              key={index}
              onClick={() => onFileClick(file)}
              className="border rounded-lg p-4 hover:shadow-md transition cursor-pointer bg-gray-50"
            >
              <div className="flex items-center gap-2 mb-2">
                {file.type === "folder" && <FaFolder className="text-yellow-500" />}
                {file.type === "excel" && <FaFileExcel className="text-green-600" />}
                {file.type === "excel-shared" && (
                  <>
                    <FaFileExcel className="text-green-600" />
                    <FaUserFriends className="text-gray-500" />
                  </>
                )}
                <span className="font-medium">{file.name}</span>
              </div>
              <div className="text-xs text-gray-500">Owner: {file.owner}</div>
              <div className="text-xs text-gray-500">Modified: {file.modified}</div>
              <div className="text-xs text-gray-500">Size: {file.size || "—"}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContent;

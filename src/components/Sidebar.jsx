import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineDelete,
  AiOutlineCloud,
  AiOutlinePlus,
  AiOutlineUsergroupAdd,
  AiOutlineInbox,
  AiOutlineLaptop,
  AiOutlineFolder,
} from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
import gooleDrive from "../assets/google-drive-logo.webp";

const sidebarItems = [
  { icon: <AiOutlineHome size={20} />, label: "Home" },
  {
    icon: <AiOutlineFolder size={20} />,
    label: "My Drive",
    children: [
      { label: "Spreadsheets" },
      { label: "Notebook" },
    ],
  },
  { icon: <AiOutlineLaptop size={20} />, label: "Computers" },
  { icon: <AiOutlineUsergroupAdd size={20} />, label: "Shared with me" },
  { icon: <AiOutlineClockCircle size={20} />, label: "Recent" },
  { icon: <AiOutlineStar size={20} />, label: "Starred" },
  { icon: <AiOutlineInbox size={20} />, label: "Spam" },
  { icon: <AiOutlineDelete size={20} />, label: "Bin" },
  { icon: <AiOutlineCloud size={20} />, label: "Storage" },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("My Drive");
  const [expanded, setExpanded] = useState({});

  const handleItemClick = (label) => setActiveItem(label);
  const toggleExpand = (label) =>
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <div className="w-64 h-screen text-sm text-gray-700">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <img src={gooleDrive} alt="Drive Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">Drive</span>
        </div>

        <button className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 font-bold px-6 py-4 shadow-xl rounded-xl mb-4">
          <AiOutlinePlus size={20} />
          New
        </button>

        {/* Sidebar Items */}
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => {
            const isActive = activeItem === item.label;
            const hasChildren = item.children?.length > 0;
            const isExpanded = expanded[item.label];

            return (
              <div key={index}>
                {/* Parent Row */}
                <div
                  className={`flex items-center px-1 py-2 rounded-full cursor-pointer ${
                    isActive
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleItemClick(item.label)}
                >
                  {/* Arrow (only if has children) */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(item.label);
                    }}
                    className="w-4 flex justify-center items-center"
                  >
                    {hasChildren && (
                      <IoMdArrowDropright
                        size={16}
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Icon + Label */}
                  <div className="flex items-center gap-3 ml-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </div>

                {/* Children */}
                {hasChildren && isExpanded && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child, childIndex) => {
                      const isChildActive = activeItem === child.label;
                      return (
                        <div
                          key={childIndex}
                          onClick={() => handleItemClick(child.label)}
                          className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer ${
                            isChildActive
                              ? "bg-blue-100 text-blue-700 font-medium"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <IoMdArrowDropright size={16} />
                          <span>{child.label}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

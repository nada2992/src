import { useState } from "react";
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
import googleDrive from "../../assets/google-drive-logo.webp";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState({
    parent: "My Drive",
    child: "",
  });
  const [expanded, setExpanded] = useState({});

  const handleItemClick = (label, parent = null) => {
    if (parent) {
      setActiveItem({ parent, child: label });
    } else {
      setActiveItem({ parent: label, child: "" });
    }
  };

  const toggleExpand = (label) =>
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));

  const sidebarItems = [
    { icon: <AiOutlineHome size={20} />, label: "Home" },
    {
      icon: <AiOutlineFolder size={20} />,
      label: "My Drive",
      children: [{ label: "Spreadsheets" }, { label: "Notebook" }],
    },
    { icon: <AiOutlineLaptop size={20} />, label: "Computers" },
    { icon: <AiOutlineUsergroupAdd size={20} />, label: "Shared with me" },
    { icon: <AiOutlineClockCircle size={20} />, label: "Recent" },
    { icon: <AiOutlineStar size={20} />, label: "Starred" },
    { icon: <AiOutlineInbox size={20} />, label: "Spam" },
    { icon: <AiOutlineDelete size={20} />, label: "Bin" },
    { icon: <AiOutlineCloud size={20} />, label: "Storage" },
  ];

  return (
    <div className="w-64 h-screen text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <img src={googleDrive} alt="Drive Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">Drive</span>
        </div>

        <button className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 font-bold px-6 py-4 shadow-xl rounded-xl mb-4">
          <AiOutlinePlus size={20} />
          New
        </button>

        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              item={item}
              isActive={activeItem.parent === item.label && !activeItem.child}
              isChildActive={
                activeItem.parent === item.label && !!activeItem.child
              }
              activeChild={activeItem.child}
              isExpanded={!!expanded[item.label]}
              onItemClick={handleItemClick}
              onToggleExpand={toggleExpand}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

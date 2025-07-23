import { IoMdArrowDropright } from "react-icons/io";

const SidebarItem = ({
  item,
  isActive,
  isExpanded,
  onItemClick,
  onToggleExpand,
  activeChild,
}) => {
  const hasChildren = item.children?.length > 0;

  return (
    <div>
      <div
        className={`flex items-center px-1 py-2 rounded-full cursor-pointer ${
          isActive
            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        onClick={() => onItemClick(item.label)}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggleExpand(item.label);
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

        <div className="flex items-center gap-3 ml-2">
          {item.icon}
          <span>{item.label}</span>
        </div>
      </div>

      {/* Render children if expanded */}
      {hasChildren && isExpanded && (
        <div className="ml-6 space-y-1">
          {item.children.map((child, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-full cursor-pointer flex items-center gap-2 ${
                activeChild === child.label
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              onClick={() => onItemClick(child.label, item.label)}
            >
              <IoMdArrowDropright
                size={16}
                className={`transition-transform duration-200 ${
                  isExpanded ? "rotate-90" : ""
                }`}
              />
              {child.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;

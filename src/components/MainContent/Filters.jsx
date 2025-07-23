import { useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Filters = ({
  fileTypeOptions,
  selectedType,
  setSelectedType,
  showTypeDropdown,
  setShowTypeDropdown,
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowTypeDropdown(false);
      }
    };

    if (showTypeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTypeDropdown]);

  const filters = [
    {
      name: "Type",
      hasDropdown: true,
      options: fileTypeOptions,
      selected: selectedType,
      onSelect: (type) => {
        setSelectedType(type);
        setShowTypeDropdown(false);
      },
      showDropdown: showTypeDropdown,
      toggleDropdown: () => setShowTypeDropdown(!showTypeDropdown),
    },
    { name: "People", hasDropdown: false },
    { name: "Modified", hasDropdown: false },
    { name: "Source", hasDropdown: false },
  ];

  return (
    <div className="flex gap-2 mb-4 relative">
      {filters.map((filter) => (
        <div key={filter.name} className="relative">
          <button
            onClick={filter.hasDropdown ? filter.toggleDropdown : undefined}
            className="border px-4 py-1 rounded flex items-center gap-1
                       bg-white dark:bg-gray-800 
                       text-black dark:text-white 
                       border-gray-300 dark:border-gray-700 
                       hover:bg-gray-100 dark:hover:bg-gray-700 transitiion-all duration-200"
          >
            {filter.name}
            {filter.hasDropdown && <IoMdArrowDropdown />}
          </button>

          {filter.hasDropdown && filter.showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute z-10 mt-1 w-40 rounded shadow border 
               bg-white dark:bg-gray-800 
               border-gray-300 dark:border-gray-700 transitiion-all duration-200"
            >
              {filter.options.map((option) => (
                <div
                  key={option}
                  onClick={() => filter.onSelect(option)}
                  className={`px-4 py-2 cursor-pointer 
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    ${
                      filter.selected === option
                        ? "bg-gray-200 dark:bg-gray-600 font-semibold"
                        : ""
                    }`}
                >
                  {option === "all" ? "All Types" : option}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;

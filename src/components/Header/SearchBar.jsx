import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineTune } from "react-icons/md";

const SearchBar = ({ onSearch }) => (
  <div className="flex items-center bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-full w-full max-w-xl">
    <AiOutlineSearch className="text-gray-600 dark:text-gray-300" size={20} />
    <input
      type="text"
      placeholder="Search in Drive"
      className="bg-transparent outline-none px-3 w-full text-sm text-gray-800 dark:text-gray-100"
      onChange={(e) => onSearch?.(e.target.value)}
      aria-label="Search in Drive"
    />
    <MdOutlineTune className="text-gray-600 dark:text-gray-300" size={20} />
  </div>
);

export default SearchBar;

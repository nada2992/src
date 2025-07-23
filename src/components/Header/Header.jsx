import { FiSettings, FiHelpCircle, FiCheckCircle } from "react-icons/fi";
import { PiSparkleLight } from "react-icons/pi";
import { BsGrid3X3Gap } from "react-icons/bs";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import HeaderIcon from "./HeaderIcon";

const Header = ({ onSearch }) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900">
    <SearchBar onSearch={onSearch} />

    <div className="flex items-center gap-4 ml-6">
      <ThemeToggle />
      <HeaderIcon Icon={FiCheckCircle} ariaLabel="Check" />
      <HeaderIcon Icon={FiHelpCircle} ariaLabel="Help" />
      <HeaderIcon Icon={FiSettings} ariaLabel="Settings" />
      <HeaderIcon Icon={PiSparkleLight} ariaLabel="Sparkle" />
      <HeaderIcon Icon={BsGrid3X3Gap} ariaLabel="Grid" />
    </div>
  </div>
);

export default Header;

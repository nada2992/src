import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings, FiHelpCircle, FiCheckCircle } from "react-icons/fi";
import { MdOutlineTune } from "react-icons/md";
import { PiSparkleLight } from "react-icons/pi";
import { BsGrid3X3Gap, BsSun, BsMoon } from "react-icons/bs";

const HeaderIcon = ({ Icon, ariaLabel, onClick }) => (
  <button
    className="focus:outline-none"
    aria-label={ariaLabel}
    onClick={onClick}
    type="button"
  >
    <Icon size={20} className="text-gray-700 dark:text-gray-200" />
  </button>
);

const getInitialDarkMode = () => {
  const saved = localStorage.getItem("darkMode");
  return saved === null ? false : saved === "true";
};

const Header = ({ onSearch = () => {} }) => {
const [theme, setTheme] = useState('light');

  const handleInputChange = (event) => onSearch(event.target.value);

 const handleToggle = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme);
      }
      return newTheme;
    });
  };

  // Use useEffect to sync theme with localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    if (theme === 'dark') {
      html?.classList.add('dark');
      html?.classList.remove('light');
    } else {
      html?.classList.add('light');
      html?.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-full w-full max-w-xl">
        <AiOutlineSearch className="text-gray-600 dark:text-gray-300" size={20} />
        <input
          type="text"
          placeholder="Search in Drive"
          className="bg-transparent outline-none px-3 w-full text-sm text-gray-800 dark:text-gray-100"
          onChange={handleInputChange}
        />
        <MdOutlineTune className="text-gray-600 dark:text-gray-300" size={20} />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-4 ml-6">
<button
  onClick={handleToggle}
  className="focus:outline-none"
  aria-label="Toggle dark mode"
  type="button"
>
  {theme === 'dark' ? (
    <BsSun size={20} className="text-yellow-400" />
  ) : (
    <BsMoon size={20} className="text-gray-700 dark:text-gray-200" />
  )}
</button>

        <HeaderIcon Icon={FiCheckCircle} ariaLabel="Check" />
        <HeaderIcon Icon={FiHelpCircle} ariaLabel="Help" />
        <HeaderIcon Icon={FiSettings} ariaLabel="Settings" />
        <HeaderIcon Icon={PiSparkleLight} ariaLabel="Sparkle" />
        <HeaderIcon Icon={BsGrid3X3Gap} ariaLabel="Grid" />
      </div>
    </div>
  );
};

export default Header;

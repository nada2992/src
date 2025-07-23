import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className="focus:outline-none"
      type="button"
    >
      {isDark ? (
        <BsSun size={20} className="text-yellow-400" />
      ) : (
        <BsMoon size={20} className="text-gray-700 dark:text-gray-200" />
      )}
    </button>
  );
};

export default ThemeToggle;

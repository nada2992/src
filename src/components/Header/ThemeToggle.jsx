// ThemeToggle.jsx
import { useState, useCallback, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle = () => {
  const getInitialTheme = () => localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(getInitialTheme);

  const applyTheme = (newTheme) => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(newTheme);
  };

  const handleToggle = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle dark mode"
      aria-pressed={theme === "dark"}
      className="focus:outline-none"
      type="button"
    >
      {theme === "dark" ? (
        <BsSun size={20} className="text-yellow-400" />
      ) : (
        <BsMoon size={20} className="text-gray-700 dark:text-gray-200" />
      )}
    </button>
  );
};

export default ThemeToggle;

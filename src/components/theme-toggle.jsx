// ThemeToggle.js
import { useEffect, useState } from "react";
import { MoonStarIcon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-900 border border-transparent dark:text-white transition hover:cursor-pointer hover:border hover:border-gray-500 hover:scale-3d hover:shadow-lg"
    >
      {theme === "light" ? <MoonStarIcon /> : "☀️"}
    </button>
  );
};
// "☀️"
export default ThemeToggle;

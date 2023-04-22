import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <button
      className="bg-gray-200 dark:text-white dark:bg-gray-700 rounded-full p-2 focus:outline-none"
      onClick={onToggle}
    >
      {isDarkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
    </button>
  );
}

export default ThemeToggle;

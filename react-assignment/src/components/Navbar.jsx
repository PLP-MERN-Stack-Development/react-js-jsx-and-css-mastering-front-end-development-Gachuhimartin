import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { dark, toggle } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-800 dark:text-white font-bold">
              Home
            </Link>
            <Link to="/tasks" className="text-gray-800 dark:text-white">
              Tasks
            </Link>
            <Link to="/api" className="text-gray-800 dark:text-white">
              API
            </Link>
          </div>
          <button
            onClick={toggle}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
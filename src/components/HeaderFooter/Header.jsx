import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const nav = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Recipes", path: "/recipes" },
  { id: 3, name: "Blog", path: "/blog-list" },
  { id: 4, name: "Contact", path: "/contact-us" },
  { id: 5, name: "About us", path: "/about-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3 relative">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Brand */}
        <Link to="/" className="flex items-center">
          <img src="/Badge.svg" alt="Logo" className="h-6 sm:h-9 mr-2" />
          <span className="text-xl font-semibold dark:text-white">Foodiland</span>
        </Link>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div
          id="navbar-menu"
          className={`${
            isOpen
              ? "absolute top-full left-0 w-full bg-white dark:bg-gray-900 z-50 max-h-[calc(100vh-3.5rem)] overflow-y-auto"
              : "hidden"
          } md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-sm font-medium">
            {nav.map(({ id, name, path }) => {
              const isActive = location.pathname === path;
              return (
                <li key={id}>
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3 ${
                      isActive
                        ? "text-blue-700 font-semibold md:text-gray-900 dark:text-white"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

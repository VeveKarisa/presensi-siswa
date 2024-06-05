import React, { useState } from "react";
import { Link } from "react-router-dom";
  
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-[99999]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <p className="font-black">Welcome</p>
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
              <p selector="#home" className="block py-2 px-3 cursor-pointer">
                Home
              </p>
            </li>
            <li>
              <p selector="#about" className="block py-2 px-3 cursor-pointer">
                  About
              </p>
            </li>
            <li>
              <p selector="#experience" className="block py-2 px-3 cursor-pointer">
                  Experience
              </p>
            </li>
            <li>
              <Link to="/portfolio" className="block py-2 px-3">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Fullscreen menu */}
      <div
        className={`fixed inset-0 bg-white flex items-center justify-center transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="font-medium flex flex-col items-center space-y-8">
          <li>
            <p selector="#home" className="text-xl">
              Home
            </p>
          </li>
          <li>
              <p selector="#about" className="text-xl">
                  About
              </p>
            </li>
          <li>
            <Link to="/portfolio" className="text-xl" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-xl" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

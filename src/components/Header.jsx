import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import SearchBar from "./SearchBar";
import logo from "../assets/ImagesA/Whatsub_w_text.png";

const Header = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false); // For toggling the menu
  const navbarRef = useRef(null); // Create a ref for the navbar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.documentElement.classList.add("navbar-open"); // Add class to <html>
    } else {
      document.documentElement.classList.remove("navbar-open"); // Remove class from <html>
    }
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
      document.documentElement.classList.remove("navbar-open"); // Remove class from <html> when clicked outside
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup the event listener on unmount
    };
  }, [isOpen]);

  return (
    <header className="bg-[#f1e1c8] md:py-0 py-2">
      <div className="container flex justify-between md:h-[96px] items-center">
        <div className="flex items-center">
          <img src={logo} alt="What-a-Sub Logo" className="md:h-[78px] h-[60px]" />
        </div>

        {/* Hamburger Icon for medium devices */}
        <button
          className="block lg:hidden text-[#0000009E] order-3"
          onClick={toggleMenu}
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <nav className="hidden lg:flex xl:space-x-14 space-x-8">
          {/* Replace <a> with <Link> and maintain Tailwind styles */}
          <Link
            to="/"
            className={`nav-link text-[#0000009E] hover:text-[#2AC438]  ${
              location.pathname === "/"
                ? "text-[#2AC438] font-bold border-b-[1px] border-[#2AC438]"
                : "font-normal"
            }`}
          >
            Home
          </Link>
          <Link
            to="/Menu"
            className={`nav-link text-[#0000009E] hover:text-[#2AC438]  ${
              location.pathname === "/Menu"
                ? "text-[#2AC438] font-bold border-b-[1px] border-[#2AC438]"
                : "font-normal"
            }`}
          >
            Menu
          </Link>
          <Link
            to="/About"
            className={`nav-link text-[#0000009E] hover:text-[#2AC438]  ${
              location.pathname === "/About"
                ? "text-[#2AC438] font-bold border-b-[1px] border-[#2AC438]"
                : "font-normal"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/ContactUs"
            className={`nav-link text-[#0000009E] hover:text-[#2AC438]  ${
              location.pathname === "/ContactUs"
                ? "text-[#2AC438] font-bold border-b-[1px] border-[#2AC438]"
                : "font-normal"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <div
          className={`bg-black opacity-50 w-full h-full top-0 left-0 right-0 bottom-0 fixed z-40 ${
            isOpen ? "block" : "hidden"
          }`}
        ></div>
        {/* Mobile menu */}
        <nav ref={navbarRef}
          className={`fixed top-0 md:w-[260px] w-[220px] shadow-2xl h-full bg-[#f1e1c8] flex flex-col items-start space-y-4 p-8 transform transition-left duration-700 ease-linear py-4 lg:hidden z-50 ${
            isOpen ? "left-0" : "-left-full"
          }`}
        >
          <div
            className="absolute right-3 top-3"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <Link
            to="/"
            onClick={toggleMenu} // Close menu after click
            className={`nav-link text-[#0000009E] hover:text-[#2AC438]  ${
              location.pathname === "/" ? "text-[#2AC438] font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/Menu"
            onClick={toggleMenu} // Close menu after click
            className={`nav-link text-[#0000009E] hover:text-[#2AC438]  ${
              location.pathname === "/Menu" ? "text-[#2AC438] font-bold" : ""
            }`}
          >
            Menu
          </Link>
          <Link
            to="/About"
            onClick={toggleMenu} // Close menu after click
            className={`nav-link text-[#0000009E] hover:text-[#2AC438]  ${
              location.pathname === "/About" ? "text-[#2AC438] font-bold" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/ContactUs"
            onClick={toggleMenu} // Close menu after click
            className={`nav-link text-[#0000009E] hover:text-[#2AC438]  ${
              location.pathname === "/ContactUs"
                ? "text-[#2AC438] font-bold"
                : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <SearchBar />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import SearchBar from "./SearchBar";
import logo from "../assets/ImagesA/Whatsub_w_text.png";

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-[#f1e1c8]">
      <div className="container flex justify-between h-[96px] items-center py-2">
      <div className="flex items-center">
        <img src={logo} alt="What-a-Sub Logo" className="h-[78px]" />
      </div>

      <nav className="flex xl:space-x-14 space-x-8">
        {/* Replace <a> with <Link> and maintain Tailwind styles */}
        <Link
          to="/Home"
          className={`nav-link text-[#0000009E] hover:text-[#2AC438] hover:font-medium ${
            location.pathname === "/Home" ? "text-[#2AC438] font-bold border-b-[1px] border-[#2AC438]" : "font-normal"
          }`}
        >
          Home
        </Link>
        <Link
          to="/Menu"
     className={`nav-link text-[#0000009E] hover:text-[#2AC438] hover:font-medium ${
      location.pathname === "/Menu" ? "text-[#2AC438] font-bold border-b-[1px] border-[#2AC438]" : "font-normal"
    }`}
        >
          Menu
        </Link>
        <Link
          to="/About"
          className={`nav-link text-[#0000009E] hover:text-[#2AC438] hover:font-medium ${
            location.pathname === "/About" ? "text-[#2AC438] font-bold border-b-[1px] border-[#2AC438]" : "font-normal"
          }`}
        >
          About Us
        </Link>
        <Link
          to="/ContactUs"
          className={`nav-link text-[#0000009E] hover:text-[#2AC438] hover:font-medium ${
            location.pathname === "/ContactUs" ? "text-[#2AC438] font-bold border-b-[1px] border-[#2AC438]" : "font-normal"
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

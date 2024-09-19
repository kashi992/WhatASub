import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import icon1 from "../assets/ImagesA/icons/logo_facebook.svg";
import icon2 from "../assets/ImagesA/icons/logo_twitter.svg";
import icon3 from "../assets/ImagesA/icons/logo_instagram.svg";
import logo from "../assets/ImagesA/Whatsub_w_text.png";
const Footer = () => {
  const location = useLocation();
  return (
    <footer className="bg-[#f1e1c8] md:py-0 py-4">
      <div className="container flex md:justify-between justify-center md:gap-0 gap-4 md:h-[120px] items-center md:flex-nowrap flex-wrap">
        <div className="flex items-center">
          <img src={logo} alt="What-a-Sub Logo" className="h-[78px]" />
        </div>

        <nav className="flex xl:space-x-14 space-x-8">
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

        <div className="flex gap-6">
          <Link className="h-[56px] w-[56px] rounded-full border-[1px] border-[#0000001A] flex justify-center items-center p-[10px]">
            <img src={icon1} alt="facebook" />
          </Link>
          <Link className="h-[56px] w-[56px] rounded-full border-[1px] border-[#0000001A] flex justify-center items-center p-[10px]">
            <img src={icon2} alt="twitter" />
          </Link>
          <Link className="h-[56px] w-[56px] rounded-full border-[1px] border-[#0000001A] flex justify-center items-center p-[10px]">
            <img src={icon3} alt="instagram" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

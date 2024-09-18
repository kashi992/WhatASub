import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SearchBar = () => {
  return (
    <div className="relative md:block hidden">
      <input
        type="text"
        placeholder="Search"
        className="ps-[56px] p-2 w-[253px] h-[48px] bg-white rounded-[40px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button className="absolute left-3 top-0 h-full flex items-center text-gray-400">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;

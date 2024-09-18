import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ img, alt, title, details,linkTo }) {
  return (
    <div className="menuItem p-3 border-[1px] border-[#0000001A] rounded-xl">
      <div className="h-[222px]">
        <img
          src={img}
          alt={alt}
          className="h-full w-full object-cover rounded-xl"
        />
        </div>
        <h5 className="font-bold text-[18px] leading-tight my-4 text-[#4A4846] uppercase">
          {title}
        </h5>
        <p className="text-[16px] leading-tight text-[#2C272499] mb-4">{details}</p>
        <Link
          to={linkTo}
          className="w-full h-[49px] flex justify-center items-center text-white bg-[#00A500] rounded-[67px] text-[18px] leading-tight font-medium"
        >
          Order now!
        </Link>
    </div>
  );
}

export default MenuItem;

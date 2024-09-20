import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import new1 from "../../../assets/ImagesA/new1.png";
import new2 from "../../../assets/ImagesA/new2.png";
import new3 from "../../../assets/ImagesA/new3.png";

const HomeGallery = () => {
  return (
    <section className="py80">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="fs56 leading-tight font-bold text-black">
            What’s <span className="text-[#F10100]"> New</span>
          </h2>
          <Link
            to=""
            className="lg:h-[56px] md:h-[50px] h-[42px] BtnWrap lg:px-9 md:px-6 px-4 fs24 text-[#FBB03B] fw400 lg:gap-4 md:gap-2 gap-1 w-fit rounded-[67px] font-medium flex justify-center items-center"
          >
            See more
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12.5H19"
                stroke="#E7BD20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5.5L19 12.5L12 19.5"
                stroke="#E7BD20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="grid xl:gap-[35px] md:gap-5 gap-3 galleryWrap">
          <div style={{ gridArea: "a" }}>
            <img src={new1} alt="" className="w-full h-full rounded-[16px]" />
          </div>
          <div style={{ gridArea: "b" }}>
            <img src={new2} alt="" className="w-full h-full rounded-[16px]" />
          </div>
          <div style={{ gridArea: "c" }}>
            <img src={new3} alt="" className="w-full h-full rounded-[16px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;

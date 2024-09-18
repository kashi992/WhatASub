import React from "react";
import { Link } from "react-router-dom";
import arrowImg from "../assets/ImagesA/icons/arrow-right.svg";

const ContentImgRow = ({
    className,
    contentClass,
    ImgClass,
    title,
    detail,
    btn,
    btnTxt,
    LinkTo,
    imgSrc,
    containClass
}) => {
    return (
        <div className={`${className}`}>
            <div className={`container flex lg:gap-10 gap-4 md:flex-nowrap flex-wrap items-center ${containClass}`}>
                <div className={`${contentClass} w-full`}>
                    <h2 className="min-[1370px]:text-[48px] lg:text-[40px] text-[30px] text-black leading-none font-extrabold">
                        {title}
                    </h2>
                    <p className="text-lg text-black mt-4">{detail}</p>
                    {btn && <Link to={LinkTo} className="h-[50px] px-[35px] flex justify-center items-center gap-4 border-2 border-[#4A4846] w-fit rounded-[32px] text-[#4A4846] text-[18px] font-medium mt-10">{btnTxt} <img src={arrowImg} alt="" /></Link>}
                </div>
                <div className={`${ImgClass} w-full`}>
                    <img src={imgSrc} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContentImgRow;

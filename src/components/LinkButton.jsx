import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({className,LinkTo,btnText,imgSrc,hasIcon}) => {
  return (
    <Link to={LinkTo} className={`gap-4 w-fit rounded-[67px] font-medium flex justify-center items-center ${className}`}>
      {btnText}
      {
        hasIcon && <img src={imgSrc} alt="" />
      }
    </Link>
  );
};

export default LinkButton;

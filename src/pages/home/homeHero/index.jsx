import React from "react";
import home1 from "../../../assets/ImagesA/heroBanner.png";
import home2 from "../../../assets/ImagesA/heroBtm.png";
import LinkButton from "../../../components/LinkButton";

const HomeBanner = () => {
  return (
    <section className="bg-[#F1E1C8] pt-10">
      <div className="container flex justify-between items-center min-[1370px]:pb-[112px] lg:pb-[80px] pb-3 md:flex-nowrap flex-wrap">
        <div className="max-w-[599px] w-full">
          <h2 className="fs56 text-black leading-none font-extrabold">
            Make Your First Order and Get
            <span className="text-[#00A500]"> 50% OFF</span>
          </h2>
          <p className="fs18 leading-tight text-black mt-4 mb-8">
            Expedita nostrum suscipit et dolorum. Est possimus ut fugit qui qui
            officia id voluptatem. Praesentium ut ipsam quia odit. Eum
            architecto sapiente iusto magnam. Eius atque quo voluptas voluptatem
            quaerat.
          </p>
          <LinkButton
            className="h-[58px] px-[69px] bg-[#00A500] text-white border-[1px] border-transparent fs18 hover:bg-transparent hover:border-[#00A500] hover:text-black"
            btnText="Order Now!"
          />
        </div>
        <div className="max-w-[604px] w-full">
          <img src={home1} alt="Burgers" />
        </div>
      </div>
      <div>
        <img src={home2} alt="" />
      </div>
    </section>
  );
};

export default HomeBanner;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroSub from "../assets/ImagesA/meatball.png";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const wiggleText = useRef(null);

  useEffect(() => {
    gsap.to(wiggleText.current, {
      duration: 0.1,
      x: 5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <Header />

      <div className="bg-[#f1e1c8] p-6">
        <h1 className="text-4xl font-bold mb-6 text-black">
          Make Your First Order and{" "}
          <span ref={wiggleText} className="text-[#00A500]">
            Get 50% OFF
          </span>
        </h1>
        <p className="text-lg text-black mb-8">
          Expedita nostrum suscipit et dolorum. Est possimus ut fugit qui qui officia id voluptatem. Praesentium ut ipsam quia
          odit. Eum architecto sapiente iusto magnam. Eius atque quo voluptas voluptatem quaerat.
        </p>

        <img src={HeroSub} alt="Meat Ball Sub " className="h-96 object-cover" />
        <Button />
      </div>
      <Footer/>
    </>
  );
};

export default Home;

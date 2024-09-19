import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import about1 from "../assets/ImagesA/about1.png";
import about2 from "../assets/ImagesA/about2.png";
import about3 from "../assets/ImagesA/about3.png";
import img1 from "../assets/ImagesA/menu_items/VeggieSub.png";
import img2 from "../assets/ImagesA/menu_items/ItalianSub.png";
import img3 from "../assets/ImagesA/menu_items/MeatballSub.png";
import img4 from "../assets/ImagesA/menu_items/GrilledCheese.png";
import MenuItem from "../components/MenuItem";
import ContentImgRow from "../components/ContentImgRow";

const veggieArr = [
  {
    img: img1,
    alt: "veggie Sub",
    title: "veggie Sub",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiidh!",
  },
  {
    img: img2,
    alt: "Italian Sub",
    title: "Italian Sub",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiidh!",
  },
  {
    img: img3,
    alt: "Meatball Sub",
    title: "Meatball Sub",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiidh!",
  },
  {
    img: img4,
    alt: "Grilled Cheese",
    title: "Grilled Cheese",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiidh!",
  },
];

const About = () => {
  return (
    <>
      <ContentImgRow
        className="bg-[#f1e1c8] pt-[38px] md:pb-[112px] pb-4"
        title="The What-a-Sub Story"
        detail=" What-a-Sub started with a dream—to bring more than just great subs to our neighborhood, but to create a space where everyone feels like family. From humble beginnings to becoming a local favorite, our journey has been filled with flavorful experiences and a community that feels like home"
        contentClass="max-w-[599px]"
        ImgClass="max-w-[604px]"
        imgSrc={about1}
      />
      <ContentImgRow
        className="bg-white lg:py-[80px] py-[60px]"
        containClass="flex-row-reverse justify-end"
        title="Our Mission"
        detail="At What-a-Sub, our mission goes beyond crafting delicious, mouth-watering subs. We are committed to being a part of the local community, giving back, and spreading joy through food and shared experiences."
        contentClass="max-w-[595px]"
        ImgClass="max-w-[568px]"
        imgSrc={about2}
      />
      <ContentImgRow
        className="bg-[#FFD123] lg:py-[80px] py-[60px]"
        title="Community and Connection"
        detail="We believe that a strong community makes everything better. That’s why we host events every month, from amateur stand-up comedy nights to sub-making classes. It’s all about creating connections, sharing laughs, and giving back. Whether it’s supporting a local charity or simply bringing people together for a good cause, What-a-Sub is about family"
        contentClass="max-w-[641px]"
        ImgClass="max-w-[543px]"
        imgSrc={about3} btn={true} btnTxt="Learn more"
      />

      <section className="lg:py-[80px] py-[60px]">
        <div className="container">
        <h2 className="min-[1370px]:text-[48px] lg:text-[40px] text-[30px] text-black leading-none font-extrabold">
          Our Menu: Crafted with Care
        </h2>
        <p className="text-lg text-black mt-5 mb-11 max-w-[974px] w-full">Every sub at What-a-Sub is made with fresh, locally sourced ingredients. From our bread to our hand-picked toppings, we put care into every bite. We’re all about quality and flavor, offering a menu that’s both classic and innovative, catering to every taste and craving</p>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  xl:gap-x-6 xl:gap-y-10 gap-x-4 gap-y-6">
            {veggieArr.map((data, index) => (
              <MenuItem
                key={index}
                img={data.img}
                alt={data.alt}
                title={data.title}
                details={data.details}
              />
            ))}
          </div>
        </div>
       
      </section>
    </>
  );
};

export default About;

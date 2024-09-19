import React from "react";
import MenuItem from "../components/MenuItem";
import img1 from "../assets/ImagesA/menu_items/VeggieSub.png";
import img2 from "../assets/ImagesA/menu_items/ItalianSub.png";
import img3 from "../assets/ImagesA/menu_items/MeatballSub.png";
import img4 from "../assets/ImagesA/menu_items/GrilledCheese.png";
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
const italianArr = [
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
const meatballArr = [
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
function Menu() {
  return (
    <>
      <div className="xl:py-20 py-14">
        <div className="container">
          <h1 className="min-[1370px]:text-[56px] md:text-[45px] text-[35px] text-center font-bold md:mb-10 mb-6 leading-none text-black">
            Our Menu
          </h1>
          <h2 className="text-[#F10100] leading-none md:py-4 py-2 border-b-[1px] border-[#E41D1D] w-fit font-bold min-[1370px]:text-[40px] md:text-[30px] text-[22px] xl:mb-10 mb-6">
            Veggie <span className="text-black">SUB</span>{" "}
          </h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  xl:gap-x-6 xl:gap-y-10 gap-x-4 gap-y-6  mb-12">
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


          <h2 className="text-[#F10100] leading-none md:py-4 py-2 border-b-[1px] border-[#E41D1D] w-fit font-bold min-[1370px]:text-[40px] md:text-[30px] text-[22px] xl:mb-10 mb-6">
          Italian <span className="text-black">SUB</span>{" "}
          </h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-x-6 xl:gap-y-10 gap-x-4 gap-y-6 mb-12">
            {italianArr.map((data, index) => (
              <MenuItem
                key={index}
                img={data.img}
                alt={data.alt}
                title={data.title}
                details={data.details}
              />
            ))}
          </div>

          <h2 className="text-[#F10100] leading-none md:py-4 py-2 border-b-[1px] border-[#E41D1D] w-fit font-bold min-[1370px]:text-[40px] md:text-[30px] text-[22px] xl:mb-10 mb-6">
          Meatball <span className="text-black">SUB</span>{" "}
          </h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-x-6 xl:gap-y-10 gap-x-4 gap-y-6">
            {meatballArr.map((data, index) => (
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
      </div>
    </>
  );
}

export default Menu;

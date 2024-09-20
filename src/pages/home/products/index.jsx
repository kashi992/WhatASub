import React from 'react'
import img1 from "../../../assets/ImagesA/menu_items/VeggieSub.png";
import img2 from "../../../assets/ImagesA/menu_items/ItalianSub.png";
import img3 from "../../../assets/ImagesA/menu_items/MeatballSub.png";
import img4 from "../../../assets/ImagesA/menu_items/GrilledCheese.png";
import MenuItem from '../../../components/MenuItem';

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
const Products = () => {
  return (
    <section className='lg:pb-10'>
        <div className="container">
        <h2 className="text-black leading-none md:py-4 py-2 border-b-[1px] border-[#E41D1D] w-fit font-bold fs56 xl:mb-10 mb-6">
        Our <span className="text-[#F10100]">Featured</span>{" "} Products
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
        </div>
      
    </section>
  )
}

export default Products

import React from "react";
import HomeBanner from "./homeHero";
import HomeGallery from "./homeGallery";
import Products from "./products";

const Home = () => {
  return (
    <>
     <HomeBanner/>
     <HomeGallery/>
     <Products/>
    </>
  );
};

export default Home;

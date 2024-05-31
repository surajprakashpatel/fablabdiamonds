import React, { useState } from "react";
import "./Shop.css";
import CategoryCard from "./category-card";
import SectionHeading from './section-heading';
import image1 from "../images/rings/ring1.webp"
import image2 from "../images/rings/ring2.webp"
import image3 from "../images/rings/ring8.webp"
import image4 from "../images/rings/ring4.webp"
import image5 from "../images/rings/ring5.webp"


const Shop = () => {
  return (

    <div className="section-container column">
          <div className="max-width-container">
            <SectionHeading
              heading="Our Collections"
              subtitle=""
            ></SectionHeading>
            <div className="home-cards-container">
              <CategoryCard name = "Anklets"
              categoryImg={image1}></CategoryCard>
              <CategoryCard name="Necklace"
              categoryImg={image2}>
              </CategoryCard>
              <CategoryCard
                name="Earrings"
                categoryImg={image3}
              ></CategoryCard>
              <CategoryCard
                name="Pendants"https
                categoryImg={image4}
              ></CategoryCard>
              <CategoryCard
                name="Braceletes"
                categoryImg={image5}
              ></CategoryCard>
            </div>
          </div>
         
       
        </div>
   
   
  );
};

export default Shop;

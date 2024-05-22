import React, { useState } from "react";
import "./FablabGaurantee.css";
import CategoryCard from "./category-card2";
import SectionHeading from '../components/section-heading';
import image1 from "../images/gaurantee1.png"
import image2 from "../images/gaurantee2.png"
import image3 from "../images/gaurantee3.png"
import image4 from "../images/gaurantee4.png"
import image5 from "../images/gaurantee5.png"


const FablabGaurantee = () => {
  return (

    <div className="section-container column fablabgaurantee">
          <div className="max-width-container fablabgaurantee">
          <SectionHeading
              heading="The Fablab Gaurantee"
              subtitle=""
            ></SectionHeading>
            <div className="home-cards-container">
              <CategoryCard name = "Free Shipping"
              categoryImg={image1}></CategoryCard>
              <CategoryCard name="Hallmarked Gold"
              categoryImg={image2}>
              </CategoryCard>
              <CategoryCard
                name="Certified Jwellery"
                categoryImg={image3}
              ></CategoryCard>
              <CategoryCard
                name="Easy Return"https
                categoryImg={image4}
              ></CategoryCard>
              <CategoryCard
                name="Easy Exchange"
                categoryImg={image5}
              ></CategoryCard>
            </div>
          </div>
    
        </div>
   
   
  );
};

export default FablabGaurantee;

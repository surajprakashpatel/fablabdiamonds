import React, { useState } from "react";
import "./Shop.css";
import CategoryCard from "./category-card";
import SectionHeading from '../components/section-heading';
import ItemCard from "../components/item-card"
import image1 from "../images/ring1.webp"
import image2 from "../images/ring2.webp"
import image3 from "../images/ring3.webp"
import image4 from "../images/ring4.webp"
import image5 from "../images/ring5.webp"



const Special = () => {
  return (

    <div className="section-container">
<div className="max-width-container">

  <div className="home-cards-container">
  
          
  <ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>
          
  <ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>
          
                   
  <ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>
               
  <ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>
               
  <ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>
               
  <ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>
               
  <ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>
               
  <ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>
  <ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>
          
  <ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>

<ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>
      <ItemCard
        name="Amazing Bulb"
        value="3"
        imageSrc={image5}
      ></ItemCard>
      
 
  </div>
</div>
</div>
   
   
  );
};

export default Special;

import React, { useState } from "react";
import "./Home.css";
import image from "../images/home_hero_bg.png"
import image2 from "../images/ring2.webp"
import image3 from "../images/ring3.webp"
import image4 from "../images/ring4.webp"
import image5 from "../images/ring5.webp"

const Home = () => {
  return (

    <div className="home-full-width-banner section-container">
    <div className="home-left4">
      <div className="home-content">
        <span className="home-text25">LOOKBOOKS</span>
        <span className="home-text26">
          Carefully curated diamonds, well matched in style and looks
        </span>
      </div>
      <div className="home-btn button">
        <span className="home-text27">Explore now</span>
      </div>
    </div>
    <img
      alt="Rectangle13271410"
      src={image5}
      className="home-image5"
    />
  </div>
   
  );
};

export default Home;
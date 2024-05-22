import "./Home.css";
import React, { useState, useEffect } from 'react';
import FablabGaurantee from "./FablabGaurantee.js";
import Slider from "react-slick";
import Shop from "./Shop.js";
import Blog from "./Blog.js";

  
  const Home = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      appendDots: dots => (
          <div>
              <ul style={{
                  margin: "0px", padding: "0px"
              }}> {dots} </ul>
          </div>
      ),

      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
              }
          }
      ]
  };
  
    return (
      <div className="mainClass">
        <div className="home-hero section-container">
          <div className="home-max-width max-width-container">
          <div className="home-hero1">
            <div className="home-container03">
              <h1 className="home-text14">Because every piece tells a story</h1>
              <div className="home-btn-group">
                <button className="button btn-slide">Explore the collection</button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <Shop></Shop>
        <FablabGaurantee></FablabGaurantee>
        <Blog></Blog>
      </div>
    );
  };
  
  export default Home;
import React, { useState } from "react";
import "./Home.css";
import image from "../images/home_hero_bg.png"
import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import ItemCard from '../components/item-card'
import BlogPostCard from '../components/blog-post-card'

const Footer = () => {
  return (

    <div className="home-footer">
        <div className="max-width-container">
          <footer className="home-footer1">
            <div className="home-container08">
              <h3 className="home-text28 Heading-3">FABLAB</h3>
              <span className="home-text29">
                <span>4517 Washington Ave. Manchester, Kentucky 39495,</span>
                <br></br>
                <span>United States</span>
              </span>
              <span className="home-text32">+91 90300 00010 </span>
              <span className="home-text33">contact@fablabdiamonds.com</span>
            </div>
            <div className="home-links-container">
              <div className="home-container09">
                <span className="home-text34">Categories</span>
                <span className="home-text35">Collections</span>
                <span className="home-text36">Bangles</span>
                <span className="home-text37">Rings</span>
                <span className="home-text38">Earrings</span>
                <span className="home-text39">Anklets</span>
                <span className="home-text40">Decoration</span>
              </div>
              <div className="home-container10">
                <span className="home-text41">Company</span>
                <span className="home-text42">Shop</span>
                <span className="home-text43">Lookbook</span>
                <span className="home-text44">Specials</span>
                <span className="home-text45">About</span>
                <span className="home-text46">Blog</span>
              </div>
              <div className="home-container11">
                <span className="home-text47">Resources</span>
                <span className="home-text48">Contact us</span>
                <span className="home-text49">Order</span>
                <span className="home-text50">Track your order</span>
                <span className="home-text51">Shipping &amp; Delivery</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
   
  );
};

export default Footer;
import React, { useState } from "react";
import "./Home.css";
import image1 from "../images/ring1.webp"
import image2 from "../images/ring2.webp"
import image3 from "../images/ring3.webp"
import image4 from "../images/ring4.webp"
import image5 from "../images/ring5.webp"

import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import ItemCard from '../components/item-card'
import BlogPostCard from '../components/blog-post-card'

const Blog = () => {
  return (

    <div className="section-container">
    <div className="max-width-container">
      <SectionHeading
        heading="Our blog"
        subtitle="Read the latest news and articles related to us"
        rootClassName="section-heading-root-class-name"
      ></SectionHeading>
      <div className="home-container07">
        <BlogPostCard
          title="Unique natural color combinations"
          newProp="Unique natural color combinations"
          imageSrc={image4}
        ></BlogPostCard>
        <BlogPostCard
          title="Unique natural color combinations"
          newProp="Unique natural color combinations"
          imageSrc={image1}
          ></BlogPostCard>
        <BlogPostCard
          title="Special combinations for nature lovers"
          newProp="Special combinations for nature lovers"
          imageSrc={image2}
          ></BlogPostCard>
      </div>
    </div>
  </div>
   
  );
};

export default Blog;
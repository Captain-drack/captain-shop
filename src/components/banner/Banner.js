import { Container } from "@mui/material";
import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <Container>
      <div className="banner">
        <img
          className="banner-primary"
          src="https://static.vecteezy.com/system/resources/thumbnails/003/240/364/small/shopping-online-on-phone-paper-art-modern-pink-background-gifts-box-free-vector.jpg"
          alt="Images"
        />
        <img
          className="banner-secondary"
          src="https://hotdealszone.com/wp-content/uploads/2020/06/Flipkart-ICICI-Bank-Cards-Offer-1024x147.jpg"
          alt="Images"
        />
      </div>
    </Container>
  );
};

export default Banner;

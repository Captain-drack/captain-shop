import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import IndividualCard from "../individual/individualCard";
import "./productlist.css";

const ProductList = () => {
  // const products = useSelector((state) => state.allProducts.product);
  const [productArray, setProductArray] = useState([]);

  const options = "https://fakestoreapi.com/products";

  const fetchProduct = async () => {
    try {
      const response = await axios.get(options);
      console.log(response);
      setProductArray(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // console.log("hello", products);

  return (
    <Container>
      <div className="productlist">
        <IndividualCard productArray={productArray} />
      </div>
    </Container>
  );
};

export default ProductList;

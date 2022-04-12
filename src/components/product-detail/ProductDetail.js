import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cart } from "../../redux/actions/productsAction";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Container } from "@mui/material";
import "./productdetail.css";
import ProductList from "../product-list/ProductList";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(cart(product));
  };

  const options = `https://fakestoreapi.com/products/${productId}`;

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(options);
      console.log("hello4321", response);
      setProduct(response.data);
    };
    getProduct();
  }, []);

  const { title, image, price, description, category } = product;

  return (
    <div>
      <Container>
        <div className="product-detail">
          <img className="product-image-1" src={image} alt={title} />
          <div className="particular-product">
            <h2 className="product">{title}</h2>
            <h1 className="product-price">Price: $ {price}</h1>
            <h2 className="product">Category: {category}</h2>
            <h2 className="product-description">Product Details</h2>
            <p className="product-para">{description}</p>
            <div style={{ marginTop: "3rem" }}>
              <Button
                style={{ marginRight: "1rem" }}
                variant="contained"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </Button>
              <Link to="/cart">
                <Button variant="contained" color="error">
                  Go to Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductDetail;

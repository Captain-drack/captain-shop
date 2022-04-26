import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import "./cart.css";
import { Container } from "@mui/material";

const MainCart = (product) => {
  const [price, setPrice] = useState(0);
  const state = useSelector((state) => state.productsReducer);

  const total = () => {
    let price = 0;
    state.map((ele, k) => {
      price = ele.price * ele.qty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <Container>
      {state.length !== 0 && (
        <h4 className="hello">You have {state.length} items in your basket</h4>
      )}
      <Cart />
      {state.length !== 0 && (
        <h2 className="hello">Price: $ {price.toFixed(2)}</h2>
      )}
      {state.length !== 0 && (
        <button className="proceed">Proceed to Checkout</button>
      )}
    </Container>
  );
};

export default MainCart;

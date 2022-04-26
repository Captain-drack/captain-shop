import React from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import "./cart.css";
import { Container } from "@mui/material";

const MainCart = (product) => {
  const state = useSelector((state) => state.productsReducer);

  return (
    <Container>
      {state.length !== 0 && (
        <h4 className="hello">You have {state.length} items in your basket</h4>
      )}
      <Cart />
      {state.length !== 0 && (
        <button className="proceed">Proceed to Checkout</button>
      )}
    </Container>
  );
};

export default MainCart;

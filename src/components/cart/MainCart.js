import React from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import "./cart.css";
import { Container } from "@mui/material";

const MainCart = () => {
  const state = useSelector((state) => state.productsReducer);

  return (
    <Container>
      {state.length !== 0 && (
        <h4 className="hello">My Cart ({state.length})</h4>
      )}
      <Cart />
      {state.length !== 0 && (
        <button className="proceed">Proceed to Checkout</button>
      )}
    </Container>
  );
};

export default MainCart;

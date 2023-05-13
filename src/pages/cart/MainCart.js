import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import "./cart.css";

const MainCart = () => {
  const [price, setPrice] = useState(0);
  const state = useSelector((state) => state.productsReducer);
  const navigate = useNavigate();

  useEffect(() => {
    const total = () => {
      let price = 0;
      state.map((ele, k) => {
        price = ele.price * ele.qty + price;
        return;
      });
      setPrice(price);
    };

    total();
  }, []);

  return (
    <Container>
      {state.length !== 0 && (
        <h4 className="hello">You have {state.length} items in your basket</h4>
      )}
      <Cart />
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {state.length !== 0 && (
          <h2 className="hello">Subtotal: ₹ {price.toFixed(2)}</h2>
        )}
        {state.length !== 0 && (
          <button
            onClick={() => {
              navigate("/checkout");
            }}
            className="proceed"
          >
            Proceed to Checkout
          </button>
        )}
      </Box>
    </Container>
  );
};

export default MainCart;

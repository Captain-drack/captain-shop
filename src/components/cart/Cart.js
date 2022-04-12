import React from "react";
import { Button, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cart, deleteCart } from "../../redux/actions/productsAction";
import "./cart.css";

const Cart = () => {
  const state = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  const deleteItem = (product) => {
    dispatch(deleteCart(product));
  };

  const addItem = (product) => {
    dispatch(cart(product));
  };

  const Cart = (product) => {
    const { id, title, image, price, qty, category } = product;
    return (
      <Container>
        <h4>My Cart ({state.length})</h4>
        <div className="cart-detail" key={id}>
          <img src={image} alt={title} width="15%" />
          <div style={{ marginLeft: "3rem" }}>
            <h6 style={{ fontSize: "30px", margin: "0px" }}>{title}</h6>
            <h6 className="cart-category">
              <span style={{ fontWeight: "500" }}>Category:</span> {category}
            </h6>
            <h6 style={{ fontSize: "30px", margin: "0px", fontWeight: "500" }}>
              Price: $ {qty * price}
            </h6>
            <div className="cart-button-group">
              <Button
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                }}
                onClick={() => deleteItem(product)}
              >
                -
              </Button>
              <p style={{ fontSize: "30px", fontWeight: "500" }}>{qty}</p>
              <Button
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                }}
                onClick={() => addItem(product)}
              >
                +
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <button className="proceed">Proceed to Checkout</button>
      </Container>
    );
  };

  const emptyCart = () => {
    return (
      <Container>
        <div className="empty-cart">
          <img
            src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png"
            alt="empty-cart"
          />
          <div className="empty-cart-heading">
            <h3 className="empty-cart-h3">Your Cart is Empty</h3>
            <p className="empty-cart-p">Add something to make me happy 🙂</p>
          </div>
        </div>
      </Container>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(Cart)}
    </>
  );
};

export default Cart;

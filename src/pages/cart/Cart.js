import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart, deleteCart } from "../../redux/actions/productsAction";
import {
  Box,
  Button,
  Container,
  Typography,
  Snackbar,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "./cart.css";

const Cart = () => {
  const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);
  const state = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteItem = (product) => {
    dispatch(deleteCart(product));
  };

  const addItem = (product) => {
    dispatch(cart(product));
  };

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const Cart = (product) => {
    const { id, title, image, price, qty, category } = product;
    return (
      <Container>
        <Box component="div" className="cart-detail" key={id}>
          <img src={image} alt={title} width="15%" />
          <Box component="div" sx={{ marginLeft: "3rem" }}>
            <Typography component="h6" sx={{ fontSize: "30px", margin: "0px" }}>
              {title}
            </Typography>
            <Typography component="h6" className="cart-category">
              <Box component="span" sx={{ fontWeight: "500" }}>
                Category:
              </Box>{" "}
              {category}
            </Typography>
            <Typography
              component="h6"
              sx={{ fontSize: "30px", margin: "0px", fontWeight: "500" }}
            >
              Price: ₹ {price.toFixed(2)}
            </Typography>
            <Box component="div" className="cart-button-group">
              <Button
                sx={{
                  fontSize: "30px",
                  fontWeight: "500",
                }}
                onClick={() => {
                  deleteItem(product);
                  handleClick("Item quantity deleted successfully");
                }}
              >
                -
              </Button>
              <Typography
                component="p"
                sx={{ fontSize: "30px", fontWeight: "500", margin: "1rem" }}
              >
                {qty}
              </Typography>
              <Button
                sx={{
                  fontSize: "30px",
                  fontWeight: "500",
                }}
                onClick={() => {
                  addItem(product);
                  handleClick("Item quantity added successfully");
                }}
              >
                +
              </Button>
              <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                TransitionProps={{ onExited: handleExited }}
                message={messageInfo ? messageInfo.message : undefined}
                action={
                  <>
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      sx={{ p: 0.5 }}
                      onClick={handleClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  </>
                }
              />
            </Box>
          </Box>
        </Box>
        <hr />
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
            width="40%"
          />
          <div className="empty-cart-heading">
            <h3 className="empty-cart-h3">Your Cart is Empty</h3>
            <p className="empty-cart-p">Add something to make me happy 🙂</p>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "70%", margin: "1rem 0rem 2rem 0rem" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Shop Now
            </Button>
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

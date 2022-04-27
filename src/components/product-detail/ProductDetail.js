import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cart } from "../../redux/actions/productsAction";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, Container, Snackbar } from "@mui/material";
import "./productdetail.css";
import ProductList from "../product-list/ProductList";
import MuiAlert from "@mui/material/Alert";

const ProductDetail = () => {
  const { productId } = useParams();
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([]);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={1} ref={ref} variant="filled" {...props} />;
  });

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(cart(product));
  };

  const handleClick = () => {
    setOpen(true);
    addProduct(product);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const options = `https://fakestoreapi.com/products/${productId}`;

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(options);
      console.log("hello4321", response);
      setProduct(response.data);
    };
    getProduct();
  }, [productId]);

  const { title, image, price, description, category } = product;

  return (
    <Box component="div">
      <Container>
        <Box component="div" className="product-detail">
          <img className="product-image-1" src={image} alt={title} />
          <Box component="div" className="particular-product">
            <h2 className="product">{title}</h2>
            <h1 className="product-price">Price: ₹ {price}</h1>
            <h2 className="product">Category: {category}</h2>
            <h2 className="product-description">Product Details</h2>
            <p className="product-para">{description}</p>
            <Box component="div" sx={{ marginTop: "3rem" }}>
              <Button
                sx={{ marginRight: "1rem" }}
                variant="contained"
                onClick={() => handleClick()}
              >
                Add to Cart
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Item added Successfully
                </Alert>
              </Snackbar>
              <Link to="/cart">
                <Button variant="contained" color="error">
                  Go to Cart
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box component="div">
        <ProductList />
      </Box>
    </Box>
  );
};

export default ProductDetail;

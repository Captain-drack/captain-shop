import * as React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const state = useSelector((state) => state.productsReducer);

  return (
    <Container>
      <div className="header">
        <Link to="/">
          <img
            src="https://www.logopik.com/wp-content/uploads/edd/2018/07/Ecommerce-Logo-Vector.png"
            alt="finmo logo"
            className="logo"
          />
        </Link>
        <div>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/cart"
          >
            <Button
              style={{
                color: blueGrey[900],
                fontSize: "18px",
                marginRight: "16px",
              }}
            >
              <ShoppingCartIcon
                style={{
                  color: blueGrey[500],
                  marginRight: "5px",
                }}
              />{" "}
              Cart({state.length})
            </Button>
          </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/login"
          >
            <Button
              style={{
                color: blueGrey[900],
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

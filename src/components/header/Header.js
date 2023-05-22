import * as React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { Box, Container } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";
import { Link } from "react-router-dom";
import logoBlack from "../../assets/logo-black.png";

export default function ButtonAppBar() {
  const state = useSelector((state) => state.productsReducer);

  return (
    <Container>
      <Box className="header">
        <Link to="/">
          <img
            src={logoBlack}
            alt="captain_logo"
            className="logo"
            style={{ width: "150px" }}
          />
        </Link>
        <Box>
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
        </Box>
      </Box>
    </Container>
  );
}

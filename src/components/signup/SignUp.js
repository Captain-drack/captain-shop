import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function FullWidthTextField() {
  const initialData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialData);

  let navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let path = `/login`;
    navigate(path);
  };

  return (
    <Container>
      <div className="login">
        <h1 style={{ textAlign: "center" }}>Sign Up to E-commerce</h1>
        <div className="login-form">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0, width: "450px" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-name"
                style={{ marginBottom: "2rem" }}
                label="Full Name"
                value={formData.username}
                type="name"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-name"
                style={{ marginBottom: "2rem" }}
                label="E-mail"
                value={formData.email}
                type="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-uncontrolled"
                style={{ marginBottom: "2rem" }}
                label="Password"
                value={formData.password}
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-uncontrolled"
                style={{ marginBottom: "2rem" }}
                label="Confirm Password"
                value={formData.confirmPassword}
                type="password"
                name="confirmPassword"
                onChange={handleChange}
              />
            </div>
            <button className="sign-in" onClick={handleSubmit}>
              Sign Up
            </button>
            <div className="sign-up">
              <p
                style={{
                  color: "rgb(117, 117, 117)",
                  marginTop: "2rem",
                  fontWeight: "500",
                }}
              >
                New to E-commerce? Create an account{" "}
              </p>
              <Link className="link-button-sign-up" to="/login">
                Sing In
              </Link>
            </div>
          </Box>
        </div>
      </div>
    </Container>
  );
}

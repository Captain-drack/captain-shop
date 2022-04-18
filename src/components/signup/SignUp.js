import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import "./signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const initialData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(formData));
    setSubmit(true);
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && submit) {
      //object.key transfer object to array
      console.log(formData);
    }
  }, [errors]);

  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      error.username = "Username is required";
    }
    if (!values.email) {
      error.email = "E-mail is required";
    } else if (!regex.text(values.email)) {
      error.email = "This is not a valid format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 8) {
      error.password = "Password must be more than 8 characters";
    } else if (values.password.length > 16) {
      error.password = "Password must be less than or equal to 16 characters";
    }
    if (!values.confirmPassword) {
      error.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      error.confirmPassword = "Confirm password must be same as Password";
    }
    return error;
  };

  return (
    <Container>
      <div className="login">
        <h1 style={{ textAlign: "center" }}>Sign Up to E-commerce</h1>
        <div className="login-form">
          <form onClick={handleSubmit}>
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
                  label="Full Name"
                  value={formData.username}
                  type="name"
                  name="username"
                  onChange={handleChange}
                />
                <p className="error-tag">{errors.username}</p>
              </div>
              <div>
                <TextField
                  id="outlined-name"
                  label="E-mail"
                  value={formData.email}
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                <p className="error-tag">{errors.email}</p>
              </div>
              <div>
                <TextField
                  id="outlined-uncontrolled"
                  label="Password"
                  value={formData.password}
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                <p className="error-tag">{errors.password}</p>
              </div>
              <div>
                <TextField
                  id="outlined-uncontrolled"
                  label="Confirm Password"
                  value={formData.confirmPassword}
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
                <p className="error-tag">{errors.confirmPassword}</p>
              </div>
              <button className="sign-in">Sign Up</button>
              <div className="sign-up">
                <p
                  style={{
                    color: "rgb(117, 117, 117)",
                    marginTop: "2rem",
                    fontWeight: "500",
                  }}
                >
                  If you have already an account. Then{" "}
                </p>
                <Link className="link-button-sign-up" to="/login">
                  Sing In
                </Link>
              </div>
            </Box>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Signup;

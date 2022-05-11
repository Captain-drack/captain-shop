import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, IconButton, InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import TextArea from "../signup/TextArea";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./login.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const validate = Yup.object({
    email: Yup.string().required("E-mail is required"),
    password: Yup.string().required("Password is required"),
  });

  let navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(data) => {
        // for path
        let path = `/`;

        const userInfo = JSON.parse(localStorage.getItem("userData"));
        console.log(userInfo.values.email);

        // for localStorage
        if (userInfo) {
          // getItem can return actual value or null
          console.log(
            "check password",
            userInfo.values.password,
            data.password
          );
          if (userInfo.values.password === data.password) {
            navigate(path);
          } else {
            alert("Email or Password is not matching with our record");
          }
        } else {
          console.log("Email or Password is not matching with our record");
        }
      }}
    >
      {(formik) => (
        <Container>
          <div className="login">
            <h1 style={{ textAlign: "center" }}>Sign Up to E-commerce</h1>
            <div className="login-form">
              <Form>
                <Box
                  sx={{
                    "& .MuiTextField-root": { m: 0, width: "450px" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextArea
                    style={{ marginBottom: "1rem" }}
                    label="E-mail"
                    name="email"
                    type="email"
                  />
                  <TextArea
                    style={{ marginBottom: "1rem" }}
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      // <-- This is where the toggle button is added.
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <button type="submit" className="sign-in">
                    Sign In
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
                    <Link className="link-button-sign-up" to="/signup">
                      Sing Up
                    </Link>
                  </div>
                </Box>
              </Form>
            </div>
          </div>
        </Container>
      )}
    </Formik>
  );
};

export default Login;

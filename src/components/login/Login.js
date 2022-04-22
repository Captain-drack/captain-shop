import React from "react";
import { Formik, Form } from "formik";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import { Container } from "@mui/material";
import "./login.css";
import { Link } from "react-router-dom";
import TextArea from "../signup/TextArea";
import * as Yup from "yup";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email("E-mail is invalid")
      .required("E-mail is required"),
    password: Yup.string().required("Password is required"),
  });

  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    let path = `/`;
    navigate(path);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
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
                    type="password"
                  />
                  <button className="sign-in" onClick={handleSubmit}>
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

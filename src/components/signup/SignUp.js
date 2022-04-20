import React from "react";
import { Formik, Form } from "formik";
import Box from "@mui/material/Box";

import { Container } from "@mui/material";
import "./signup.css";
import { Link } from "react-router-dom";
import TextArea from "./TextArea";
import * as Yup from "yup";

const SignUp = () => {
  const validate = Yup.object({
    name: Yup.string()
      .min(4, "Must be 4 character or more")
      .max(30, "Must be 30 character or less")
      .required("Name is required"),
    email: Yup.string()
      .email("E-mail is invalid")
      .required("E-mail is required"),
    password: Yup.string()
      .min(8, "Must be 8 character or more")
      .max(16, "Must be 16 character or less")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
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
                    label="Name"
                    name="name"
                    type="text"
                  />
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
                  <TextArea
                    style={{ marginBottom: "1rem" }}
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                  <button className="sign-in" type="submit">
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
                      If you have already an account. Then{" "}
                    </p>
                    <Link className="link-button-sign-up" to="/login">
                      Sing In
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

export default SignUp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import {
  Alert,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Snackbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import TextArea from "../../../components/TextArea/TextArea";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignUp = () => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

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

  const validationSchema = Yup.object({
    email: Yup.string().required("E-mail is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    let path = `/login`;
    console.log(values);
    const postData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    // for localStorage
    const userData = JSON.parse(localStorage?.getItem("userData")) || [];
    if (userData.find((data) => data.email === values.email)) {
      //Todo add user already presnt msg
      setOpen(true);
      return;
    }

    localStorage.setItem(
      "userData",
      JSON.stringify([...userData, { ...postData }])
    );

    navigate(path);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Box p="2rem">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Box display="flex" alignItems="center" justifyContent="center">
              <Box sx={{ padding: "1rem" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "26px" },
                    fontWeight: "bold",
                  }}
                >
                  Register to Captain-Shop
                </Typography>
                <Box mt="1rem">
                  <Form>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 0, width: "450px" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextArea label="Name" name="name" type="text" />
                      <TextArea
                        style={{ marginTop: "1rem" }}
                        label="E-mail"
                        name="email"
                        type="email"
                      />
                      <TextArea
                        style={{ marginTop: "1rem" }}
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
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextArea
                        style={{ marginTop: "1rem" }}
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                      />
                      <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        fullWidth
                        style={{ marginTop: "1.5rem" }}
                      >
                        Sign Up
                      </Button>
                      <Box>
                        <Typography
                          sx={{
                            color: "rgb(117, 117, 117)",
                            marginTop: "1rem",
                            fontWeight: "500",
                            fontsize: "12px",
                          }}
                        >
                          If you have already an account. Then{" "}
                          <Link className="link-button-sign-up" to="/login">
                            Sing In
                          </Link>
                        </Typography>
                      </Box>
                    </Box>
                  </Form>
                </Box>
              </Box>
            </Box>
          )}
        </Formik>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
            User is already Registered
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default SignUp;

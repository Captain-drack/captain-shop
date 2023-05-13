import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextArea from "../../../components/TextArea/TextArea";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    show: false,
    message: "",
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("E-mail is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleClose = () => {
    setErrorMessage({ show: false, message: "" });
  };

  const handleSubmit = (values) => {
    const storedUserData = localStorage.getItem("userData") || [];
    const userData = JSON.parse(storedUserData);
    if (!userData.find((data) => data.email === values.email)) {
      //todo email or user not found
      setErrorMessage({ show: true, message: "User Not Found" });
      return;
    }
    if (
      !userData.find(
        (data) =>
          data.email === values.email && data.password === values.password
      )
    ) {
      //todo password is incorrect
      setErrorMessage({ show: false, message: "Password incorrect" });
      return;
    }
    localStorage.setItem("isLoggedIn", true);
    navigate("/");

    // if (
    //   userData.email === values.email &&
    //   userData.password === values.password
    // ) {
    // } else {
    //   alert("Email or Password is not matching with our records");
    // }
  };

  let navigate = useNavigate();

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
                <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
                  Welcome Back
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "26px" },
                    fontWeight: "bold",
                  }}
                >
                  Sign In to Captain-Shop
                </Typography>
                <Box mt="1rem">
                  <Form>
                    <Box
                      sx={{
                        "& .MuiTextField-root": { m: 0, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextArea label="E-mail" name="email" type="email" />
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
                      <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        fullWidth
                        style={{ marginTop: "1.5rem" }}
                      >
                        Sign In
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
                          New to E-commerce? Create an account{" "}
                          <Link to="/signup">Sing Up</Link>
                        </Typography>
                      </Box>
                    </Box>
                  </Form>
                </Box>
              </Box>
            </Box>
          )}
        </Formik>
        <Snackbar
          open={errorMessage?.show}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
            {errorMessage.message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Login;

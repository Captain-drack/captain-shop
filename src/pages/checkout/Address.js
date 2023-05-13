import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TextArea from "../../components/TextArea/TextArea";
// import TextArea from "../signup/TextArea";

const Address = () => {
  // const [shippingCountries, setShippingCountries] = useState([]);
  // const [shippingCountry, setShippingCountry] = useState("");
  // const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
  // const [shippingSubDivision, setShippingSubDivision] = useState("");
  // const [shippingOptions, setShippingOptions] = useState([]);
  // const [shippingOption, setShippingOption] = useState("");

  const validate = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    address1: Yup.string().required("Address Line 1 is required"),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("Phone number can't start with a minus")
      .integer("Phone number can't include a decimal point")
      .min(1000000000)
      .required("Phone number is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.number()
      .typeError("That doesn't look like a zip code ")
      .positive("Zip code can't start with a minus")
      .integer("Zip code number can't include a decimal point")
      .required("Zip code is required"),
    country: Yup.string().required("Country is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        phone: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      }}
      validationSchema={validate}
      onSubmit={(data) => {
        console.log("hello", data);
        // for localStorage
        const userDetails =
          JSON.parse(localStorage?.getItem("userDetails")) || {};
        localStorage.setItem(
          "userData",
          JSON.stringify({ ...userDetails, data })
        );
      }}
    >
      {(formik) => (
        <Container
          sx={{
            width: "93.5%",
          }}
        >
          <Typography
            sx={{
              margin: "0rem 0rem 1rem 0rem",
              fontSize: "22px",
              fontWeight: "500",
              textAlign: "start",
            }}
            variant="h6"
            gutterBottom
          >
            Billing address
          </Typography>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextArea
                  sx={{ marginBottom: "1rem" }}
                  name="firstName"
                  label="First name"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextArea
                  sx={{ marginBottom: "1rem" }}
                  name="lastName"
                  label="Last name"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextArea
                  sx={{ marginBottom: "1rem" }}
                  name="address1"
                  label="Address line 1"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextArea
                  sx={{ marginBottom: "1rem" }}
                  name="address2"
                  label="Address line 2"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextArea
                  sx={{ marginBottom: "1rem" }}
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextArea
                  sx={{ marginBottom: "1rem" }}
                  name="city"
                  label="City"
                  fullWidth
                  type="text"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextArea
                  sx={{ marginBottom: "1rem" }}
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  type="number"
                  s
                />
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <InputLabel>Shipping Country</InputLabel>
                <Select sx={{ marginBottom: "1rem" }}
                  name="country" ss>
                  <MenuItem key={} value={}>Select me</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel>State</InputLabel>
                <Select sx={{ marginBottom: "1rem" }}
                  name="State" value={} onChange={}>
                  <MenuItem key={} value={}>Select me</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select sx={{ marginBottom: "1rem" }}
                  name="options" value={} onChange={}>
                  <MenuItem key={} value={}>Select me</MenuItem>
                </Select>
              </Grid> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox color="primary" name="saveAddress" value="yes" />
                  }
                  label="Use this address for payment details"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ margin: "1rem 0rem 2rem 0rem" }}
                >
                  Proseed to Payment
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default Address;

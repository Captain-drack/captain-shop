import React, { useState } from "react";
import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import Address from "../Address";
import Payment from "../Payment";

const steps = ["Billing address", "Payment details"];

const Checkout = () => {
  const [activeStep, _setActiveState] = useState(0);

  const Confirmation = () => {
    <Container>
      <Typography>Confirmation</Typography>
    </Container>;
  };

  const Form = () => (activeStep === 0 ? <Address /> : <Payment />);
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{ width: "70%", marginTop: "5%", marginBottom: "5%" }}
        elevation={10}
      >
        <Typography sx={{ marginTop: "5%" }} variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => (
            <Step sx={{ margin: "5%" }} key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? <Confirmation /> : <Form />}
      </Paper>
    </Container>
  );
};

export default Checkout;

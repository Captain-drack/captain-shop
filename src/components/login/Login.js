import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function FullWidthTextField() {
  const [name, setName] = React.useState("");
  let navigate = useNavigate();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let path = `/`;
    navigate(path);
  };

  return (
    <Container>
      <div className="login">
        <h1 style={{ textAlign: "center" }}>Log in to E-commerce</h1>
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
                label="E-mail"
                value={name}
                type="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-uncontrolled"
                style={{ marginBottom: "2rem" }}
                label="Password"
                defaultValue=""
                type="password"
              />
            </div>
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
        </div>
      </div>
    </Container>
  );
}

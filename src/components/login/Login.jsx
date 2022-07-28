import React from "react";
import { useState } from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Login(props) {
  const { onLoginSubmit, goToSignup, loginMessage, errorMessageLogin } = props;
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    const data = { userId, password };
    onLoginSubmit(data);
    e.preventDefault();
  };

  return (
    <div className="justify-content-center d-flex align-items-center vh-100">
      <div className="bg-white auth-container p-5">
        <h1>Login</h1>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="User ID"
            variant="outlined"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Box>
        <Stack spacing={2} direction="row">
          <Button
            type="submit"
            value="Login"
            color="error"
            className="form-control m-1 "
            variant="contained"
          >
            Login
          </Button>
        </Stack>
        <div className="input-group">
          Don't have an account?
          <a href="#" onClick={goToSignup}>
            Sign UP!
          </a>
        </div>
        <div className="error-msg text-danger m-1">{errorMessageLogin}</div>
        <div className="text-success m-1">{loginMessage}</div>
      </div>
    </div>
  );
}

export default Login;

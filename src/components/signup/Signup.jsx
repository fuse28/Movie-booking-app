import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { ROLES } from "../../constants/userRoles";
import "./Signup.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Signup(props) {
  const { onSignupSubmit, goToLogin, errorMessageSignup } = props;

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState(ROLES.CUSTOMER);

  const handleSubmit = (e) => {
    const data = { userId, password, name: userName, email, userType };
    onSignupSubmit(data);
    e.preventDefault();
  };

  return (
    <div className="justify-content-center d-flex align-items-center vh-100">
      <div className="bg-white auth-container p-5">
        <h1>Sign up</h1>

        <Box onSubmit={handleSubmit}>
          <div className="input-group">
            <TextField
              label=" User Id"
              value={userId}
              className="form-control m-1"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <TextField
              type="password"
              label="Enter password"
              value={password}
              className="form-control m-1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <TextField
              label="User name"
              value={userName}
              className="form-control m-1"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="input-group">
            <TextField
              type="email"
              label="Enter email"
              value={email}
              className="form-control m-1"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <label>User Type: </label>
            <DropdownButton
              align="end"
              title={userType}
              id="userType"
              className="form-control m-1"
              onSelect={(val) => {
                setUserType(val);
              }}
              variant="light"
            >
              <Dropdown.Item eventKey={ROLES.CUSTOMER}>
                {ROLES.CUSTOMER}
              </Dropdown.Item>
              <Dropdown.Item eventKey={ROLES.CLIENT}>
                {ROLES.CLIENT}
              </Dropdown.Item>
            </DropdownButton>
          </div>

          <div>
            <Stack spacing={2} direction="row">
              <Button
                type="submit"
                value="Create"
                className="form-control m-1 btn btn-primary"
                variant="contained"
              >
                Sign up
              </Button>
            </Stack>
          </div>
          <div>
            Already have an account?
            <a href="#" onClick={goToLogin}>
              Login!
            </a>
          </div>
        </Box>
        <div className="error-msg text-danger m-1">{errorMessageSignup}</div>
      </div>
    </div>
  );
}

export default Signup;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsAuthenticated, setUserId } from "../../redux/auth/authActions";
import "./styles.css";
// add localStorage to other 2 pages
//  Create modalForm for page cities and states
// Add a login page and protected routes.
// a. Let's use just hardcoded login and password in UI
// b. Store user session to local storage/session storage
// c. Restrict edit forms access for not logged in users.

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const hardcodedCred = {
      email: "email@email.com",
      password: "password123",
      //userId: 1,
    };

    if (
      emailInput == hardcodedCred.email &&
      passwordInput == hardcodedCred.password
    ) {
      dispatch(setIsAuthenticated(true));
      //dispatch(setUserId(userId));

      //localStorage.setItem("userId", userId);

      history("/");
    } else {
      alert("wrong email or password combination");
    }
  };
  return (
    <>
      <div className="login-page">
        <h2 className="title">Log in</h2>
        <form
          autoComplete="off"
          onSubmit={handleLoginSubmit}
          className="login-form"
        >
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={emailInput}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              autoComplete="new-password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={passwordInput}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

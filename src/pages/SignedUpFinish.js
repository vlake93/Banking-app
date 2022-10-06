import React from "react";
import { Link } from "react-router-dom";
import "./SignedUpFinish.css";
import thanks from "../assets/thanks.png";

function SignedUpFinish() {
  return (
    <div className="registered">
      <div className="registered-container">
        <Link to="/" className="registered-close">
          x
        </Link>
        <img className="registered-img" src={thanks} />
        <h1>Thank you for registering!</h1>
        <h2>You may now login or continue browsing our site</h2>
        <Link to="/user" className="registered-login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignedUpFinish;

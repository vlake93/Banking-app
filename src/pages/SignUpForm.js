import { Link } from "react-router-dom";
import { useState } from "react";
import "./SignUpForm.css";
import signUpLogo from "../assets/logo.png";

function SignUpModal({ SignUp, error }) {

  const [details, setDetails] = useState({ name: "", email: "", username: "", password:"" });

  const handleSignUp = (e) => {
    e.preventDefault();
    SignUp(details);
  };

  const NewUser = () => {

    const [newUser, setUser] = useState({ name: "", email: "", username: "", password:"" });
    const [error, setError] = useState("");

    const userSignUp = (details) => {
      if (details.name !== "" &&
          details.email !== "" &&
          details. username !== "" &&
          details.password !== "") {
        setUser({
          name: details.name,
          email: details.email,
          username: details.username,
          password: details.password
        })
        localStorage.setItem("newUsers", JSON.stringify(newUser));
      } else {
        setError("insert error");
      }
      }
    }

  return (
    <div className="sign-up-modal">
      <form className="sign-up-form" method="GET" onSubmit={handleSignUp}>
        <div className="sign-up-design">
          <img src={signUpLogo} className="logo" alt="logo" />
        </div>
        <div className="sign-up-inputs">
          <Link to="/" className="close" type="button">
            x
          </Link>
          <h1>Sign up</h1>
          <label className="sign-up-label">Name</label>
          <input className="sign-up-input" type="text" name="name" />
          <label className="sign-up-label">Email</label>
          <input className="sign-up-input" type="email" email="email" />
          <label className="sign-up-label">Username</label>
          <input className="sign-up-input" type="text" username="username" />
          <label className="sign-up-label">Password</label>
          <input className="sign-up-input" type="password" password="password" />
          <div className="agree-box">
            <input className="agree-checkbox" type="checkbox" />
            <p className="agree-text">
              I have read and agree to ViCash terms and conditions
            </p>
          </div>
          <button onClick={handleSignUp} className="sign-up-button" type="submit">
            Sign-up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpModal;

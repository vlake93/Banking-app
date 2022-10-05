import { Link } from "react-router-dom";
import "./SignUpForm.css";
import signUpLogo from "../assets/logo.png";
import { useState } from "react";

function SignUpModal() {
<<<<<<< HEAD
  const signUp = (e) => {
    e.preventDefault();
  };

=======
  let users = [
    {
      email: "test@test.com",
      username: "vic",
      password: "user",
      balance: 1000,
    },
    {
      email: "test@test.com",
      username: "shai",
      password: "user",
      balance: 0,
    },
  ];

  if (localStorage.getItem("localRegisteredUsers") === null || undefined) {
    localStorage.setItem("localRegisteredUsers", JSON.stringify(users));
  }

  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
    balance: 0,
  });

  const signedUpUsers = JSON.parse(
    localStorage.getItem("localRegisteredUsers")
  );

  const handleEmail = (e) => {
    setNewUser({ ...newUser, email: e.target.value });
  };

  const handleUsername = (e) => {
    setNewUser({ ...newUser, username: e.target.value });
  };

  const handlePassword = (e) => {
    setNewUser({ ...newUser, password: e.target.value });
  };

  const handleBalance = (e) => {
    setNewUser({ ...newUser, balance: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "localRegisteredUsers",
      JSON.stringify([...signedUpUsers, newUser])
    );
    // localStorage.setItem(`${newUser.username}localExpenses`);
  };

  // localStorage.setItem("sample", JSON.stringify(newUser));

>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
  return (
    <div className="sign-up-modal">
      <form className="sign-up-form" method="GET">
        <div className="sign-up-design">
          <img src={signUpLogo} className="logo" alt="logo" />
        </div>
        <div className="sign-up-inputs">
          <Link to="/" className="close" type="button">
            x
          </Link>
          <h1>Sign up</h1>
          <label className="sign-up-label">Email</label>
          <input
            onChange={handleEmail}
            value={newUser.email}
            className="sign-up-input"
            type="email"
            placeholder="Email"
          />
          <label className="sign-up-label">Username</label>
          <input
            onChange={handleUsername}
            value={newUser.username}
            className="sign-up-input"
            type="text"
            placeholder="Username"
          />
          <label className="sign-up-label">Password</label>
          <input
            onChange={handlePassword}
            value={newUser.passoword}
            className="sign-up-input"
            type="password"
            placeholder="Password"
          />
          <label className="sign-up-label">Balance</label>
          <input
            onChange={handleBalance}
            value={newUser.balance}
            className="sign-up-input"
            type="number"
            placeholder="Initial Balance"
          />
          <div className="agree-box">
<<<<<<< HEAD
            <input className="agree-checkbox" type="checkbox" />
=======
            <input className="agree-checkbox" type="checkbox" required />
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
            <p className="agree-text">
              I have read and agree to ViCash terms and conditions
            </p>
          </div>
<<<<<<< HEAD
          <button onClick={signUp} className="sign-up-button" type="submit">
=======
          <button
            onClick={handleSignup}
            className="sign-up-button"
            type="submit"
          >
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
            Sign-up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpModal;

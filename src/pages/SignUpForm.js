import { Link } from "react-router-dom";
import "./SignUpForm.css";
import signUpLogo from "../assets/logo.png";
import { useState } from "react";

function SignUpModal() {
  const signUp = (e) => {
    e.preventDefault();
  };

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
  const [error, setError] = useState("");

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
    setNewUser({ ...newUser, balance: parseInt(e.target.value) });
  };

  // const handleSignup = (e) => {
  //   signedUpUsers.map((user) => {
  //     if (newUser.username === user.username) {
  //       e.preventDefault();
  //       setError("Username already taken");
  //     } else {
  //       localStorage.setItem(
  //         "localRegisteredUsers",
  //         JSON.stringify([...signedUpUsers, newUser])
  //       );
  //     }
  //   });
  // };

  const handleSignup = (e) => {
    const user = signedUpUsers.find((user) => {
      console.log(newUser.username === user.username);
      return newUser.username === user.username;
    });

    console.log(user.username);
    if (user.username) {
      e.preventDefault();
      setError("Username/Email already taken");
    } else {
      localStorage.setItem(
        "localRegisteredUsers",
        JSON.stringify([...signedUpUsers, newUser])
      );
    }
  };

  // const handleSignup = (e) => {
  //   const user = signedUpUsers.find((user) => {
  //     console.log(newUser.username === user.username);
  //     return newUser.username === user.username;
  //   });

  //   console.log(user.username);
  //   if (user.username) {
  //     e.preventDefault();
  //     setError("Username/Email already taken");
  //   } else if (!user.username) {
  //     signedUpUsers.map((user) => {
  //       if (newUser.username !== user.username) {
  //         localStorage.setItem(
  //           "localRegisteredUsers",
  //           JSON.stringify([...signedUpUsers, newUser])
  //         );
  //       }
  //     });
  //   }
  // };

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
          <h2>{error}</h2>
          <label className="sign-up-label">Email</label>
          <input
            onChange={handleEmail}
            value={newUser.email}
            className="sign-up-input"
            type="email"
            placeholder="Email"
            required
          />
          <label className="sign-up-label">Username</label>
          <input
            onChange={handleUsername}
            value={newUser.username}
            className="sign-up-input"
            type="text"
            placeholder="Username"
            required
          />
          <label className="sign-up-label">Password</label>
          <input
            onChange={handlePassword}
            value={newUser.password}
            className="sign-up-input"
            type="password"
            placeholder="Password"
            required
          />
          <label className="sign-up-label">Balance</label>
          <input
            onChange={handleBalance}
            value={newUser.balance}
            className="sign-up-input"
            type="number"
            placeholder="Initial Balance"
            required
          />
          <div className="agree-box">
            <input className="agree-checkbox" type="checkbox" required />

            <p className="agree-text">
              I have read and agree to ViCash terms and conditions
            </p>
          </div>
          <Link
            to="/registered"
            onClick={handleSignup}
            className="sign-up-button"
            type="submit"
          >
            Sign-up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpModal;

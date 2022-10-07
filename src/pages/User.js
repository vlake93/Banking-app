import { useState } from "react";
import "./User.css";
import UserLogin from "../components/User UI/UserLogin";
import logo from "../assets/logo.png";
import UserBudget from "../components/User UI/UserBudget";

const User = () => {
  const RegisteredUsers = JSON.parse(
    localStorage.getItem("localRegisteredUsers")
  );

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const userLogin = (details) => {
    RegisteredUsers.map((usermap) => {
      if (
        details.username === usermap.username &&
        details.password === usermap.password
      ) {
        setUser({
          email: usermap.email,
          username: usermap.username,
          password: usermap.password,
          balance: usermap.balance,
        });
      } else {
        setError("Username/Password doesn't match");
      }
    });
  };

  const userLogout = () => {
    setUser({ username: "", password: "" });
    setError("");
  };

  localStorage.setItem("loggedInUser", JSON.stringify(user));

  const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="user">
      {user.username !== "" ? (
        <div>
          <header className="user-header">
            {RegisteredUsers.map((user) => {
              if (
                user.username === loggedIn.username &&
                user.password === loggedIn.password
              ) {
                return (
                  <h1 className="user-text">Hello, {loggedIn.username}</h1>
                );
              }
            })}

            <img className="user-logo" src={logo} alt="logo" />
            <button type="button" onClick={userLogout} className="user-logout">
              Logout
            </button>
          </header>
          <div className="user-main">
            <UserBudget></UserBudget>
          </div>
        </div>
      ) : (
        <UserLogin Login={userLogin} error={error}></UserLogin>
      )}
    </div>
  );
};

export default User;

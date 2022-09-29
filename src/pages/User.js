import { useState } from "react";
import "./User.css";
import UserLogin from "../components/User UI/UserLogin";
import logo from "../assets/logo.png";
import UserMain from "../components/User UI/UserMain";

const User = () => {
  let users = {
    username: "vic",
    password: "user",
  };

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const userLogin = (details) => {
    console.log(details);
    if (
      details.username === users.username &&
      details.password === users.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.username,
        password: details.password,
      });
    } else {
      console.log("Username/Password doesn't match");
      setError("Username/Password doesn't match");
    }
  };

  const userLogout = () => {
    setUser({ username: "", password: "" });
  };

  return (
    <div className="user">
      {user.username !== "" ? (
        <div>
          <header className="user-header">
            <h1 className="user-text">Hello, {users.username}</h1>
            <img className="user-logo" src={logo} alt="logo" />
            <button type="button" onClick={userLogout} className="user-logout">
              Logout
            </button>
          </header>
          <UserMain></UserMain>
        </div>
      ) : (
        <UserLogin Login={userLogin} error={error}></UserLogin>
      )}
    </div>
  );
};

export default User;

import { useState } from "react";
import "./User.css";
import UserLogin from "../components/User UI/UserLogin";
import logo from "../assets/logo.png";
<<<<<<< HEAD
// import UserMain from "../components/User UI/UserMain";
import UserBudget from "../components/User UI/UserBudget";

const User = () => {
  let users = {
    username: "vic",
    password: "user",
  };
=======
import UserBudget from "../components/User UI/UserBudget";

const User = () => {
  const RegisteredUsers = JSON.parse(
    localStorage.getItem("localRegisteredUsers")
  );
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const userLogin = (details) => {
<<<<<<< HEAD
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
      // localStorage.setItem("localUsers", JSON.stringify(user));
    } else {
      console.log("Username/Password doesn't match");
      setError("Username/Password doesn't match");
    }
=======
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
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
  };

  const userLogout = () => {
    setUser({ username: "", password: "" });
<<<<<<< HEAD
    // localStorage.removeItem("localUsers");
  };
  // const userLog = JSON.parse(localStorage.getItem("localUsers"));
=======
  };

  localStorage.setItem("loggedInUser", JSON.stringify(user));

  const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c

  return (
    <div className="user">
      {user.username !== "" ? (
        <div>
          <header className="user-header">
<<<<<<< HEAD
            <h1 className="user-text">Hello, {users.username}</h1>
=======
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

>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
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

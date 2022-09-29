import { useState } from "react";
import "./User.css";
import UserLogin from "../components/User UI/UserLogin";

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
          <div>
            <header className="user-header">
              <h1>Hello, {user.username}</h1>
              <button onClick={userLogout}>Logout</button>
            </header>
            <main></main>
          </div>
        </div>
      ) : (
        <UserLogin Login={userLogin} error={error}></UserLogin>
      )}
    </div>
  );
};

export default User;

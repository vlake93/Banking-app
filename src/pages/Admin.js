import { useState } from "react";
import "./Admin.css";
import Functions from "../components/Bank/Functions";
import Corporate from "../components/Admin UI/Corporate";

const Admin = () => {
<<<<<<< HEAD
  let admins = {
    username: "vic",
    password: "admin",
  };
=======
  let admins = [
    {
      username: "vic",
      password: "admin",
    },
    { username: "shai", password: "admin" },
  ];
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c

  const [admin, setAdmin] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const corporateLogin = (details) => {
<<<<<<< HEAD
    console.log(details);
    if (
      details.username === admins.username &&
      details.password === admins.password
    ) {
      console.log("Logged in");
      setAdmin({
        name: details.username,
        password: details.password,
      });
    } else {
      console.log("Username/Password doesn't match");
      setError("Username/Password doesn't match");
    }
=======
    admins.map((adminmap) => {
      if (
        details.username === adminmap.username &&
        details.password === adminmap.password
      ) {
        console.log("Logged in");
        setAdmin({
          name: details.username,
          password: details.password,
        });
      } else {
        console.log("Username/Password doesn't match");
        setError("Username/Password doesn't match");
      }
    });
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
  };

  const corporateLogout = () => {
    setAdmin({ username: "", password: "" });
  };

<<<<<<< HEAD
=======
  const signedUpUsers = JSON.parse(
    localStorage.getItem("localRegisteredUsers")
  );

>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
  const date = new Date().toLocaleString("en-US", { dateStyle: "full" });

  return (
    <div className="admin">
      {admin.username !== "" ? (
        <div className="admin-dashboard">
          <div className="admin-header">
<<<<<<< HEAD
          <h3>{date}</h3>
          <h1>
            Welcome <span>{admins.username}</span>
          </h1>
          </div>
          <button onClick={corporateLogout} className="logoutButton">Logout</button>
          <Functions></Functions>
=======
            <div className="admin-header-greeting">
              <h3>{date}</h3>
              <h1>
                Welcome <span>{admins.username}</span>
              </h1>
            </div>
            <button onClick={corporateLogout} className="logoutButton">
              Logout
            </button>
          </div>
          <div className="admin-users-view-container">
            <div className="admin-users-view">
              <div className="users-view-header"></div>
              <ul>
                {signedUpUsers.map((user) => {
                  return (
                    <li className="admin-user-list">
                      <p>{user.username}</p>
                      <p>{user.balance}</p>
                      <input />
                      <label>
                        Withdraw
                        <input type="radio" />
                      </label>
                      <label>
                        Deposit
                        <input type="radio" />
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* <Functions></Functions> */}
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
        </div>
      ) : (
        <Corporate Login={corporateLogin} error={error}></Corporate>
      )}
    </div>
  );
};

export default Admin;

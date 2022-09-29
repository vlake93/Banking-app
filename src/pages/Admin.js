import { useState } from "react";
import "./Admin.css";
import Functions from "../components/Bank/Functions";
import Corporate from "../components/Admin UI/Corporate";

const Admin = () => {
  let admins = {
    username: "vic",
    password: "admin",
  };

  const [admin, setAdmin] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const corporateLogin = (details) => {
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
  };

  const corporateLogout = () => {
    setAdmin({ username: "", password: "" });
  };

  const date = new Date().toLocaleString("en-US", { dateStyle: "full" });

  return (
    <div className="admin">
      {admin.username !== "" ? (
        <div className="admin-dashboard">
          <div className="admin-header">
          <h3>{date}</h3>
          <h1>
            Welcome <span>{admins.username}</span>
          </h1>
          </div>
          <button onClick={corporateLogout} className="logoutButton">Logout</button>
          <Functions></Functions>
        </div>
      ) : (
        <Corporate Login={corporateLogin} error={error}></Corporate>
      )}
    </div>
  );
};

export default Admin;

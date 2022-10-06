import { useState } from "react";
import "./Admin.css";
import Functions from "../components/Bank/Functions";
import Corporate from "../components/Admin UI/Corporate";

const Admin = () => {
  let admins = [
    {
      username: "vic",
      password: "admin",
    },
    { username: "shai", password: "admin" },
  ];

  const [admin, setAdmin] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const corporateLogin = (details) => {
    admins.map((adminmap) => {
      if (
        details.username === adminmap.username &&
        details.password === adminmap.password
      ) {
        setAdmin({
          name: details.username,
          password: details.password,
        });
      } else {
        setError("Username/Password doesn't match");
      }
    });
  };

  const corporateLogout = () => {
    setAdmin({ username: "", password: "" });
    setError("");
  };

  const signedUpUsers = JSON.parse(
    localStorage.getItem("localRegisteredUsers")
  );

  const date = new Date().toLocaleString("en-US", { dateStyle: "full" });
    
  const [balance, setBalance] = useState(signedUpUsers.balance)
  
  const adminWithdraw = (e) => {
    parseInt(setBalance(balance - e.target.value))
  }

  const adminDeposit = (e) => {
    parseInt(setBalance(balance + e.target.value))
  }

  const updatedBalance = () => {
        
  }
  
  return (
    <div className="admin">
      {admin.username !== "" ? (
        <div className="admin-dashboard">
          <div className="admin-header">
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
                      <input 
                        value={balance}
                        onChange={(e) => updatedBalance(e.target.value)}
                      />
                      <button onClick={adminWithdraw}>
                        Withdraw
                      </button>
                      <button onClick={adminDeposit}>
                        Deposit
                      </button>
                      <button>
                        Transfer
                      </button>

                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* <Functions></Functions> */}
        </div>
      ) : (
        <Corporate Login={corporateLogin} error={error}></Corporate>
      )}
    </div>
  );
};

export default Admin;

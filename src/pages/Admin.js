import { useState } from "react";
import "./Admin.css";
import Corporate from "../components/Admin UI/Corporate";
import BarChart from "../components/Admin UI/BarChart";

const Admin = () => {
  let admins = [
    {
      username: "vic",
      password: "admin",
    },
    { username: "shai", password: "admin" },
  ];

  const signedUpUsers = JSON.parse(
    localStorage.getItem("localRegisteredUsers")
  );

  const [admin, setAdmin] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [balance, setBalance] = useState("");
  const [users, setUsers] = useState(signedUpUsers);
  const [toUser, setToUser] = useState("");

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

  const date = new Date().toLocaleString("en-US", { dateStyle: "full" });

  const adminWithdraw = (username) => {
    const updatedUsers = users.map((user) => {
      if (user.username === username) {
        return {
          ...user,
          balance: user.balance - balance,
        };
      }

      return user;
    });
    console.log(balance);
    setUsers(updatedUsers);
    localStorage.setItem("localRegisteredUsers", JSON.stringify(updatedUsers));
  };

  const adminDeposit = (username) => {
    const updatedUsers = users.map((user) => {
      if (user.username === username) {
        return {
          ...user,
          balance: parseInt(user.balance) + parseInt(balance),
        };
      }

      return user;
    });
    // setBalance("");
    setUsers(updatedUsers);
    localStorage.setItem("localRegisteredUsers", JSON.stringify(updatedUsers));
  };

  const adminTransfer = (username, toUser) => {
    const updatedUsers = users.map((user) => {
      if (user.username === username) {
        return {
          ...user,
          balance:
            parseFloat(user.balance).toFixed(2) -
            parseFloat(balance).toFixed(2),
        };
      } else if (user.username === toUser) {
        return {
          ...user,
          balance:
            parseFloat(user.balance).toFixed(2) +
            parseFloat(balance).toFixed(2),
        };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
    localStorage.setItem("localRegisteredUsers", JSON.stringify(updatedUsers));
  };

  const updatedBalance = (value) => {
    setBalance(value);
  };

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
            <div>
              <h1 className="chart-header">Total deposit composition</h1>
              <BarChart></BarChart>
            </div>

            <div className="admin-users-view">
              <div className="users-view-header">
                <h2>User</h2>
                <h2>Balance</h2>
              </div>
              <ul>
                {users.map((user) => {
                  return (
                    <li className="admin-user-list">
                      <div className="user-first-line">
                        <p>{user.username}</p>
                        <p>{parseFloat(user.balance).toFixed(2)}</p>
                        <input
                          type="number"
                          className="admin-input"
                          // value={balance}
                          onChange={(e) => updatedBalance(e.target.value)}
                          placeholder="Amount"
                        />
                        <button
                          className="admin-function-button"
                          onClick={() => {
                            adminWithdraw(user.username);
                          }}
                        >
                          Withdraw
                        </button>
                        <button
                          className="admin-function-button"
                          onClick={() => {
                            adminDeposit(user.username);
                          }}
                        >
                          Deposit
                        </button>
                      </div>
                      <div className="user-second-line">
                        <p></p>
                        <p></p>
                        <label>
                          <input
                            type="text"
                            placeholder="Username"
                            className="admin-input"
                            onChange={(e) => {
                              setToUser(e.target.value);
                            }}
                          />
                        </label>
                        <p></p>
                        <button
                          class="admin-function-button"
                          onClick={() => {
                            adminTransfer(user.username, toUser);
                          }}
                        >
                          Transfer
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Corporate Login={corporateLogin} error={error}></Corporate>
      )}
    </div>
  );
};

export default Admin;

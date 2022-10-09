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
  const [balanceError, setBalanceError] = useState("");

  const date = new Date().toLocaleString("en-US", { dateStyle: "full" });

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

  const adminWithdraw = (username) => {
    const updatedUsers = users.map((user) => {
      if (
        user.username === username &&
        user.balance >= balance &&
        balance !== ""
      ) {
        return {
          ...user,
          balance: parseFloat(user.balance) - parseFloat(balance),
        };
      } else if (user.balance <= balance && user.username === username) {
        setBalanceError("Insufficient balance");
      } else if (balance === "") {
        setBalanceError("Please input valid amount");
      }
      return user;
    });
    setUsers(updatedUsers);
    setBalance("");
    localStorage.setItem("localRegisteredUsers", JSON.stringify(updatedUsers));
  };

  const adminDeposit = (username) => {
    const updatedUsers = users.map((user) => {
      if (user.username === username) {
        return {
          ...user,
          balance: parseFloat(user.balance) + parseFloat(balance),
        };
      }

      return user;
    });
    setBalance("");
    setUsers(updatedUsers);
    localStorage.setItem("localRegisteredUsers", JSON.stringify(updatedUsers));
  };

  ///  BUG  /// Input for input fields gets filled simultaneously because it has same state
  ///  BUG  /// Withdraw error shows because it reads other user.balances

  const adminTransfer = (username, toUser) => {
    const updatedUsers = users.map((user) => {
      if (
        user.username === username &&
        user.balance >= balance &&
        toUser === user.username
      ) {
        return {
          ...user,
          balance: parseFloat(user.balance - balance),
        };
      } else if (user.username === toUser && user.balance >= balance) {
        return {
          ...user,
          balance: parseFloat(user.balance + balance),
        };
      } else if (user.username !== toUser) {
        setBalanceError("User not found");
      } else if (balance === "") {
        setBalanceError("Please input valid amount");
      } else {
        setBalanceError("Insufficient balance");
      }
      return user;
    });
    setUsers(updatedUsers);
    setBalance("");
    setToUser("");
    localStorage.setItem("localRegisteredUsers", JSON.stringify(updatedUsers));
  };

  const updatedBalance = (value) => {
    setBalance(value);
  };

  // const noError = (username) => {
  //   users.map((user) => {
  //     if (user.username === username) {
  //       setBalanceError("");
  //     }
  //   });
  // };

  const noError = () => {
    setBalanceError("");
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
                        <p>₱{parseFloat(user.balance).toFixed(2)}</p>
                        <input
                          type="number"
                          className="admin-input"
                          value={balance}
                          onChange={(e) =>
                            updatedBalance(parseFloat(e.target.value))
                          }
                          placeholder="Amount"
                          onFocus={() => {
                            noError();
                          }}
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
                        <p>{balanceError}</p>
                        <label>
                          <input
                            type="text"
                            placeholder="Username"
                            className="admin-input"
                            value={toUser}
                            onChange={(e) => {
                              setToUser(e.target.value);
                            }}
                            onFocus={() => {
                              noError();
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

import React, { useState, useEffect } from "react";
import "./UserMain.css";
import UserBudget from "../User UI/UserBudget";
const date = new Date().toLocaleString("en-US", { dateStyle: "full" });

function UserMain() {
  return (
    <main className="user-main">
      <div className="user-current-balance">
        <div className="user-current">
          <h2 className="user-current-text">current balance</h2>
          <h2>{date}</h2>
        </div>
        <div className="user-balance">
          <h2 className="user-balance-total">₱ 11,000.00</h2>
        </div>
      </div>
      <div className="user-main-ui">
        <div className="user-transaction"></div>
        <div className="user-components">
          <div className="user-withdraw">
            <h2>withdraw</h2>
            <label>Amount</label>
            <input type="number" required />
            <label>TO:</label>
            <select>
              <option disabled selected>
                Withdrawal partners
              </option>
              <option>Banco De Vic</option>
              <option>7-Evelyn Kiosk</option>
              <option>Vicash Mobile</option>
            </select>
            <button className="user-withdraw-button">withdraw</button>
          </div>
          <div className="user-deposit">
            <h2>Deposit</h2>
            <label>
              amount
              <input type="number" />
            </label>
            <button>deposit</button>
          </div>
          <div className="user-loan">
            <h2>loan</h2>
            <label>
              Amount
              <input type="number" />
            </label>
            <button>request loan</button>
          </div>
        </div>
      </div>
      <UserBudget></UserBudget>
    </main>
  );
}

export default UserMain;

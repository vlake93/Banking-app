import React from "react";

function UserComponent() {
  return (
    <div className="user-components">
      <div className="user-withdraw">
        <h2>withdraw</h2>
        <label>Amount</label>
        <input type="number" />
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
  );
}

export default UserComponent;

import React, { useState, useEffect } from "react";
import "./UserBudget.css";

function UserBudget() {
  const [expense, setExpense] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [particular, setParticular] = useState("");

  useEffect(() => {
    if (localStorage.getItem("localExpenses")) {
      const storedList = JSON.parse(localStorage.getItem("localExpenses"));
      setExpenses(storedList);
    }
  }, []);

  const addExpense = () => {
    if (expense) {
      const newExpense = {
        id: new Date().getTime().toString(),
        amount: expense,
        title: particular,
      };
      setExpenses([...expenses, newExpense]);
      localStorage.setItem(
        "localExpenses",
        JSON.stringify([...expenses, newExpense])
      );
      setExpense("");
      setParticular("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(expense, particular);
  };

  const handleDelete = (expense) => {
    const deleted = expenses.filter((t) => t.id !== expense.id);
    setExpenses(deleted);
    localStorage.setItem("localExpenses", JSON.stringify(deleted));
  };

  return (
    <div className="user-budget-container">
      <div className="user-budget-ui">
        <form onSubmit={onSubmit} className="user-budget">
          <h2>Expense</h2>
          <label>
            Amount:
            <input
              id="expense"
              name="expense"
              type="text"
              value={expense}
              className="user-input"
              onChange={(e) => setExpense(e.target.value)}
            />
          </label>
          <label>
            Particular:
            <input
              id="particular"
              name="particular"
              type="text"
              value={particular}
              className="user-input"
              onChange={(e) => setParticular(e.target.value)}
            />
          </label>
          <div className="user-input-button-container">
            <button className="user-input-button" onClick={addExpense}>
              Add
            </button>
          </div>
        </form>
        <div className="user-budget-balance">
          <h2>Bank Balance</h2>
          <h2>11000</h2>
          <h2>Expenses</h2>
          {expenses.map((expense) => {
            <React.Fragment key={expense.id}>
              <div>{expense.amount}</div>;
            </React.Fragment>;
          })}
          <h2>Remaining balance</h2>
          <h2>???</h2>
        </div>
      </div>
      <div className="user-expense-main">
        <div className="user-expense-header">
          <h2>Cost</h2>
          <h2>Particular</h2>
          <h2></h2>
        </div>
        {expenses.map((expense) => (
          <React.Fragment key={expense.id}>
            <div className="user-expense-container">
              <h2 className="user-expense-amount">₱{expense.amount}.00</h2>
              <h2 className="user-expense-amount">{expense.title}</h2>
              <div className="user-expense-delete-container">
                <button
                  className="user-expense-delete"
                  onClick={() => handleDelete(expense)}
                >
                  delete
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default UserBudget;

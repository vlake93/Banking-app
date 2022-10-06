import React, { useState, useEffect } from "react";
import "./UserBudget.css";
import pencil from "../../assets/pencil.png";
import trash from "../../assets/trash.png";
import check from "../../assets/check.png";

function UserBudget() {
  const [expense, setExpense] = useState("");
  const [particular, setParticular] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editing, setEditing] = useState(-1);
  const [editAmount, setEditAmount] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    if (localStorage.getItem(`${loggedIn.username}localExpenses`)) {
      const storedList = JSON.parse(
        localStorage.getItem(`${loggedIn.username}localExpenses`)
      );
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
        `${loggedIn.username}localExpenses`,
        JSON.stringify([...expenses, newExpense])
      );
      setExpense("");
      setParticular("");
    }
  };

  const handleDelete = (expense) => {
    const deleted = expenses.filter((t) => t.id !== expense.id);
    setExpenses(deleted);
    localStorage.setItem(
      `${loggedIn.username}localExpenses`,
      JSON.stringify(deleted)
    );
  };

  const handleEdit = (expense, updatedExpense) => {
    setEditing(expense.id);
    setEditAmount(updatedExpense);
  };

  const expenseList =
    JSON.parse(localStorage.getItem(`${loggedIn.username}localExpenses`)) || [];

  const handleUpdate = (expense) => {
    const updatedList = expenseList.map((xpn) => {
      if (xpn.id === expense.id) {
        return { ...xpn, amount: xpn.amount, title: xpn.title };
      }
      return xpn;
    });
    setExpenses(updatedList);
    setEditing(-1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(expense, particular);
  };

  const loggedInExpenses =
    JSON.parse(localStorage.getItem(`${loggedIn.username}localExpenses`)) || [];

  const expenseTotal = loggedInExpenses.reduce((accumulator, expense) => {
    return parseInt(accumulator) + parseInt(expense.amount);
  }, 0);

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
          <div>
            <h2>Bank Balance</h2>
            <h2>₱{loggedIn.balance}.00</h2>
          </div>
          <div>
            <h2>Expenses</h2>
            <h2>₱{expenseTotal}</h2>
          </div>
          <div>
            <h2>Remaining balance</h2>
            <h2>₱{loggedIn.balance - expenseTotal}.00</h2>
          </div>
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
              <h2 className="user-expense-amount">
                {editing === expense.id ? (
                  <input
                    type="text"
                    defaultValue={expense.amount}
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                  />
                ) : (
                  <span>₱{expense.amount}.00</span>
                )}
              </h2>
              <h2 className="user-expense-amount">
                {editing === expense.id ? (
                  <input
                    type="text"
                    defaultValue={expense.title}
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                ) : (
                  <span>{expense.title}</span>
                )}
              </h2>
              <div className="user-expense-delete-container">
                <div className="user-expense-buttons">
                  <button
                    className="user-expense-edit"
                    onClick={() => handleEdit(expense, expense.title)}
                  >
                    {editing === expense.id ? (
                      <img
                        src={check}
                        alt="check logo"
                        onClick={() => handleUpdate(expense.id)}
                      />
                    ) : (
                      <img src={pencil} alt="pencil logo" />
                    )}
                  </button>
                  <button
                    className="user-expense-delete"
                    onClick={() => handleDelete(expense)}
                  >
                    <img src={trash} alt="trash logo" />
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default UserBudget;

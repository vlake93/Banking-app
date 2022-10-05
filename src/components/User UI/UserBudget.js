import React, { useState, useEffect } from "react";
import "./UserBudget.css";
<<<<<<< HEAD

function UserBudget() {
  const [expense, setExpense] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [particular, setParticular] = useState("");

  useEffect(() => {
    if (localStorage.getItem("localExpenses")) {
      const storedList = JSON.parse(localStorage.getItem("localExpenses"));
=======
import pencil from "../../assets/pencil.png";
import trash from "../../assets/trash.png";

function UserBudget() {
  const [expense, setExpense] = useState("");
  const [particular, setParticular] = useState("");
  const [expenses, setExpenses] = useState([]);

  const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    if (localStorage.getItem(`${loggedIn.username}localExpenses`)) {
      const storedList = JSON.parse(
        localStorage.getItem(`${loggedIn.username}localExpenses`)
      );
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
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
<<<<<<< HEAD
        "localExpenses",
=======
        `${loggedIn.username}localExpenses`,
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
        JSON.stringify([...expenses, newExpense])
      );
      setExpense("");
      setParticular("");
    }
  };

<<<<<<< HEAD
=======
  const handleDelete = (expense) => {
    const deleted = expenses.filter((t) => t.id !== expense.id);
    setExpenses(deleted);
    localStorage.setItem(
      `${loggedIn.username}localExpenses`,
      JSON.stringify(deleted)
    );
  };

  const handleEdit = () => {};

>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(expense, particular);
  };

<<<<<<< HEAD
  const handleDelete = (expense) => {
    const deleted = expenses.filter((t) => t.id !== expense.id);
    setExpenses(deleted);
    localStorage.setItem("localExpenses", JSON.stringify(deleted));
  };
=======
  const loggedInExpenses = JSON.parse(
    localStorage.getItem(`${loggedIn.username}localExpenses`) || [0]
  );

  const expenseTotal = loggedInExpenses.reduce((accumulator, expense) => {
    return parseInt(accumulator) + parseInt(expense.amount);
  }, 0);
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
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
<<<<<<< HEAD
                <button
                  className="user-expense-delete"
                  onClick={() => handleDelete(expense)}
                >
                  delete
                </button>
=======
                <div className="user-expense-buttons">
                  <button
                    className="user-expense-edit"
                    onClick={() => handleEdit()}
                  >
                    <img src={pencil} alt="pencil logo" />
                  </button>
                  <button
                    className="user-expense-delete"
                    onClick={() => handleDelete(expense)}
                  >
                    <img src={trash} alt="trash logo" />
                  </button>
                </div>
>>>>>>> 9ea5bd0fb403f1110f4102741dc664648054fe5c
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default UserBudget;

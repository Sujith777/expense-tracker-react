import React, { useState } from "react";
import "../styles/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setExpense((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const [displayForm, setDisplayForm] = useState(false);
  const showFormDisplay = (event) => {
    event.preventDefault();
    setDisplayForm(true);
  };
  const hideFormDisplay = (event) => {
    event.preventDefault();
    setDisplayForm(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: expense.title,
      amount: +expense.amount,
      date: new Date(expense.date),
    };
    props.onSaveExpenseData(expenseData);
    setExpense({
      title: "",
      amount: "",
      date: "",
    });
    setDisplayForm(false);
  };
  const currentYear = new Date().getFullYear();

  return displayForm ? (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            max="10000"
            name="amount"
            value={expense.value}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min={(currentYear - 5).toString() + "-01-01"}
            max={currentYear.toString() + "-12-31"}
            name="date"
            value={expense.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-expenses__actions">
        <button type="submit" onClick={hideFormDisplay}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  ) : (
    <button type="submit" onClick={showFormDisplay}>
      Add New Expense
    </button>
  );
};

export default ExpenseForm;

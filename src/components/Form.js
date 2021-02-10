import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";
const Form = ({ setExpense, setCreateExpense }) => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [error, setError] = useState(false);
  const addExpense = (e) => {
    e.preventDefault();
    if (
      expenseAmount < 1 ||
      isNaN(expenseAmount) ||
      expenseName.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    const expense = {
      expenseName,
      expenseAmount,
      id: Date.now(),
    };
    setExpense(expense);
    setCreateExpense(true)
    setExpenseName("");
    setExpenseAmount(0);
  };
  return (
    <form onSubmit={addExpense}>
      <h2>Add your expenses here</h2>
      {error ? <Error message="Wrong expense" /> : null}
      <div className="campo">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ex. Transportation"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Expense Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ex. 250"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense"
      />
    </form>
  );
};
Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired,
  };
export default Form;

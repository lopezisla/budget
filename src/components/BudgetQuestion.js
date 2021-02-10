import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
const BudgetQuestion = ({ setBudget, setResidual, setShow }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  const defineBudget = (e) => setAmount(parseInt(e.target.value, 10));
  const addBudget = (e) => {
    e.preventDefault();
    // validate
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }
    setError(false);
    setBudget(amount);
    setResidual(amount);
    setShow(false);
  };

  return (
    <>
      <h2>Insert your budget</h2>
      {error ? <Error message="Wrong budget: insert valid amount." /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Insert your budget here"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define budget"
        />
      </form>
    </>
  );
};
BudgetQuestion.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setResidual: PropTypes.func.isRequired,
  setShow: PropTypes.func.isRequired,
};
export default BudgetQuestion;

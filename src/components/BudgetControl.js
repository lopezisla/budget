import React from "react";
import PropTypes from "prop-types";
import { checkBudget } from "../helper";
const BudgetControl = ({ budget, residual }) => {
  return (
    <>
      <div className="alert alert-primary">Budget: $ {budget}</div>
      <div className={checkBudget(budget, residual)}>
        Residual: $ {residual}
      </div>
    </>
  );
};
BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  residual: PropTypes.number.isRequired,
};
export default BudgetControl;

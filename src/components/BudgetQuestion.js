import React from "react";
const BudgetQuestion = () => {
  return (
    <>
      <h2>Insert your budget</h2>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Insert your budget"
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default BudgetQuestion;

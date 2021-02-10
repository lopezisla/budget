import React, { useState, useEffect } from "react";
import BudgetQuestion from "./components/BudgetQuestion";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";
function App() {
  const [budget, setBudget] = useState(0);
  const [residual, setResidual] = useState(0);
  const [show, setShow] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);
  useEffect(() => {
    if (createExpense) {
      setExpenses([...expenses, expense]);
      const residualBudget= residual - expense.expenseAmount;
      setResidual(residualBudget);
      setCreateExpense(false)
    }
  }, [expense, createExpense, expenses, residual]);
  return (
    <div>
      <header>
        <h1>Weekly Expenses</h1>
        <div className="contenido-principal contenido">
          {show ? (
            <BudgetQuestion
              setBudget={setBudget}
              setResidual={setResidual}
              setShow={setShow}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setExpense={setExpense} setCreateExpense={setCreateExpense}/>
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl budget={budget} residual={residual} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

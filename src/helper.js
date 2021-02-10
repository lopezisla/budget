export const checkBudget = (budget, residual) => {
  let CSSClass;
  if (budget / 4 > residual) {
    CSSClass = "alert alert-danger";
  } else if (budget / 2 > residual) {
    CSSClass = " alert alert-warning";
  } else {
    CSSClass = " alert alert-success";
  }
  return CSSClass;
};

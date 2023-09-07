import React from "react";

const Expense = (props) => {
  const deleteExpense = () => {
    // Call the onDelete function passed as a prop with the expense's id
    props.onDelete(props.id);
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.localExpenditure}</h1>
      <h1>{props.amount}</h1>
      <button onClick={deleteExpense}>DELETE</button>
    </div>
  );
};

export default Expense;

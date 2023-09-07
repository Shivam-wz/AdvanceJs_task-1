import React, { useState } from "react";
import Expense from "./components/Expense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      localExpenditure: "pune",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      localExpenditure: "mumbai",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      localExpenditure: "Rajkot",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      localExpenditure: "vadodara",
    },
  ]);

  const deleteExpense = (idToDelete) => {
    // Create a new array without the expense to delete
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== idToDelete
    );

    // Update the state with the new array of expenses
    setExpenses(updatedExpenses);
  };

  return (
    <>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          localExpenditure={expense.localExpenditure}
          onDelete={deleteExpense} // Pass the deleteExpense function as a prop
        />
      ))}
    </>
  );
}

export default App;

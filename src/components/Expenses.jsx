import React, { useState } from "react";
import "../styles/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const handleFilterChange = (year) => {
    setSelectedYear(year);
  };
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onFilterChange={handleFilterChange}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

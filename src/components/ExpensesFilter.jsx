import React from "react";

import "../styles/ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const handleChange = (event) => {
    props.onFilterChange(event.target.value);
  };
  const currYear = new Date().getFullYear();
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={handleChange}>
          <option value={currYear}>{currYear}</option>
          <option value={currYear - 1}>{currYear - 1}</option>
          <option value={currYear - 2}>{currYear - 2}</option>
          <option value={currYear - 3}>{currYear - 3}</option>
          <option value={currYear - 4}>{currYear - 4}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpenseList.css';
import ExpensesFilter from './ExpensesFilter';

const ExpensesList = (props) => {
  const defaultFilterState = { year: '2021' }
  const [filterState, setFilterState] = useState(defaultFilterState);

  const filteredExpenses = props.items.filter((item) => item.date.getFullYear() == filterState.year);

  const changeFilterHandler = (state) => {
    setFilterState(state);
  };

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filterState={filterState} onChangeFilter={changeFilterHandler} />
        {expensesContent}
      </Card>
    </div>
  )
}

export default ExpensesList;

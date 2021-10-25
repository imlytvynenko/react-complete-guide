import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpenseList.css';
import ExpensesFilter from './ExpensesFilter';

const ExpensesList = (props) => {
  const defaultFilterState = { year: '2021' }
  const [filterState, setFilterState] = useState(defaultFilterState);

  const items = props.items

  const changeFilterHandler = (state) => {
    setFilterState(state);
    console.log(filterState);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filterState={filterState} onChangeFilter={changeFilterHandler} />
        {props.items.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default ExpensesList;

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

        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        />
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        />
      </Card>
    </div>
  )
}

export default ExpensesList;

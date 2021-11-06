import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card'

import './Expenses.css'

const Expenses = (props) => {
  const defaultFilterState = { year: '2021' }
  const [filterState, setFilterState] = useState(defaultFilterState);
  const filteredExpenses = props.items.filter((item) => item.date.getFullYear() == filterState.year);

  const changeFilterHandler = (state) => {
    setFilterState(state);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filterState={filterState} onChangeFilter={changeFilterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;

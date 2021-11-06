import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const addNewExpenseHandler = (expense) => {
    props.onAddExpense({
      id: Math.random(),
      title: expense.enteredTitle,
      amount: expense.enteredAmount,
      date: expense.enteredDate
    })
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button className="new-expense__actions" onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onAddExpense={addNewExpenseHandler} onCancel={stopEditingHandler} />}
    </div>
  );
}

export default NewExpense;

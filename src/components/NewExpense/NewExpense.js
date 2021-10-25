import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const addNewExpenseHandler = (expense) => {
    props.onAddExpense(expense)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onAddExpense={addNewExpenseHandler} />
    </div>
  );
}

export default NewExpense;

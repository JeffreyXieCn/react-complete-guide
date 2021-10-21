import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {...enteredExpenseData, id: Math.random().toString()};
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setFormVisible(false);
  };

  const cancelNewExpense = () => {
    setFormVisible(false);
  }

  function addNewExpenseHandler() {
    setFormVisible(true);
  }

  let contentToDisplay;
  if (formVisible) {
    contentToDisplay =
      <ExpenseForm onCancel={cancelNewExpense} onSaveExpenseData={saveExpenseDataHandler}/>
  } else {
    contentToDisplay = <button onClick={addNewExpenseHandler}>Add New Expense</button>
  }

  return (
    <div className="new-expense">
      {contentToDisplay}
    </div>
  );
};

export default NewExpense;

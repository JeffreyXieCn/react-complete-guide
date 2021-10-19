import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title); // each component instance has its own state
  // console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Update</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;

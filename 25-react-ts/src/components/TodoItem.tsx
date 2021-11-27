import Todo from "../models/todo";
import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li
      key={props.item.id}
      className={classes.item}
      onClick={props.onRemoveTodo}
    >
      {props.item.text}
    </li>
  );
};

export default TodoItem;

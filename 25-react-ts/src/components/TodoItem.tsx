import Todo from "../models/todo";
import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  const onRemoveTodo = () => {
    props.onRemoveTodo(props.item.id);
  };

  return (
    <li key={props.item.id} className={classes.item} onClick={onRemoveTodo}>
      {props.item.text}
    </li>
  );
};

export default TodoItem;

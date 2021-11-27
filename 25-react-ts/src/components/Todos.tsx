import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  const removeTodoHandler = (todoId: string) => {
    props.onRemoveTodo(todoId);
  };

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} item={item} onRemoveTodo={removeTodoHandler} />
      ))}
    </ul>
  );
};

export default Todos;

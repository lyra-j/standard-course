import React from "react";
import Button from "../common/Button";

const TodoItem = ({ todo, handleToggleDone, handleDeleteTodo }) => {
  return (
    <li>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.detail}</p>
      </div>
      <div>
        <Button type="button" onClick={() => handleDeleteTodo(todo.id)}>
          - del
        </Button>
        <Button type="button" onClick={() => handleToggleDone(todo.id)}>
          {!todo.isDone ? "v done" : "not Yet"}
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;

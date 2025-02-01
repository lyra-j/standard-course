import React from "react";

const TodoItem = ({ todo, handleDeleteTodo, handleToggleDone }) => {
  return (
    <li key={todo.id}>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.detail}</p>
      </div>
      <div>
        <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
          - del
        </button>
        <button type="button" onClick={() => handleToggleDone(todo.id)}>
          v done
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

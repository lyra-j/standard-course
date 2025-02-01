import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  // UPDATE 완료 여부 토글
  const handleToggleDone = (id) => {
    const toggleDone = todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(toggleDone);
  };

  // DELETE 삭제 로직
  const handleDeleteTodo = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
  };

  return (
    <div>
      <div>
        <h2>WORKING..🔥</h2>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoItem
                todo={todo}
                handleToggleDone={handleToggleDone}
                handleDeleteTodo={handleDeleteTodo}
              />
            );
          }
        })}
      </div>

      <div>
        <h2>DONE!! 🎉</h2>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoItem
                todo={todo}
                handleToggleDone={handleToggleDone}
                handleDeleteTodo={handleDeleteTodo}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default TodoList;

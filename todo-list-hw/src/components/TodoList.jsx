import React from "react";
import styled from "styled-components";
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
    <StTodoBoard>
      {/* isDone === false */}
      <StSubTitle>WORKING..🔥</StSubTitle>
      <StTodoListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleToggleDone={handleToggleDone}
                handleDeleteTodo={handleDeleteTodo}
              />
            );
          }
        })}
      </StTodoListWrapper>

      {/* isDone === true */}
      <StSubTitle>DONE!! 🎉</StSubTitle>
      <StTodoListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleToggleDone={handleToggleDone}
                handleDeleteTodo={handleDeleteTodo}
              />
            );
          }
        })}
      </StTodoListWrapper>
    </StTodoBoard>
  );
};

export default TodoList;

// styled-components
const StSubTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #0c5228;
  margin-bottom: 20px;
`;

const StTodoBoard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StTodoListWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;
`;

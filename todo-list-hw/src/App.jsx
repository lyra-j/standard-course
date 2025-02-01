import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  // 로컬스토리지에서 초기값 가져오기, 없을 경우 빈 배열
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // todo변경될 때 마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <MainContainer>
        <StTitle>Standard Todo List</StTitle>

        {/* 입력 폼 */}
        <TodoForm todos={todos} setTodos={setTodos} />

        {/* 할일 목록 보드 */}
        <TodoList todos={todos} setTodos={setTodos} />
      </MainContainer>
    </>
  );
}

export default App;

// styled-components
const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  background-color: #f8f8e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const StTitle = styled.h1`
  font-size: 38px;
  font-weight: 600;
  color: #317575;
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
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

  //  // 콘솔에 값을 입력할 때 마다 계속 찍히는데 이게 맞는거임?
  // console.log(todos);

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
  width: 100vh;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #317575;
`;

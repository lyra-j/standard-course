import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  // 로컬스토리지에서 초기값 가져오기, 없을 경우 빈 배열
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  // todo변경될 때 마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // CREATE todo 추가 로직
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title,
      detail,
      isDone: false,
    };

    // 제목 || 내용 입력 안내
    if (!title.trim() || !detail.trim()) {
      alert(`제목과 내용을 모두 입력해주세요~!!`);
      return;
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  //  // 콘솔에 값을 입력할 때 마다 계속 찍히는데 이게 맞는거임?
  // console.log(todos);

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
    <>
      <MainContainer>
        <StTitle>Standard Todo List</StTitle>
        {/* 입력 폼 */}
        <StForm onSubmit={handleSubmit}>
          <StLabel htmlFor="inputTitle">
            제목
            <StInput
              type="text"
              id="inputTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="할 일"
            />
          </StLabel>
          <StLabel htmlFor="inputDetail">
            내용
            <StInput
              type="text"
              id="inputDetail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="상세사항"
            />
          </StLabel>
          <button type="submit">+ add</button>
        </StForm>
        {/* 할일 목록 보드 */}
        <div>
          <div>
            <h2>WORKING..🔥</h2>
            {todos.map((todo) => {
              if (!todo.isDone) {
                return (
                  <li key={todo.id}>
                    <div>
                      <h3>{todo.title}</h3>
                      <p>{todo.detail}</p>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => handleDeleteTodo(todo.id)}
                      >
                        - del
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToggleDone(todo.id)}
                      >
                        v done
                      </button>
                    </div>
                  </li>
                );
              }
            })}
          </div>

          <div>
            <h2>DONE!! 🎉</h2>
            {todos.map((todo) => {
              if (todo.isDone) {
                return (
                  <li key={todo.id}>
                    <div>
                      <h3>{todo.title}</h3>
                      <p>{todo.detail}</p>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => handleDeleteTodo(todo.id)}
                      >
                        - del
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToggleDone(todo.id)}
                      >
                        v not Yet
                      </button>
                    </div>
                  </li>
                );
              }
            })}
          </div>
        </div>
      </MainContainer>
    </>
  );
}

export default App;

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
const StForm = styled.form`
  width: 70%;
  background-color: #67a6916b;
  padding: 10px 14px;
  margin-top: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const StLabel = styled.label`
  color: #1b4242;
  font-size: 16px;
  font-weight: 500;
`;
const StInput = styled.input`
  width: 120px;
  height: 20px;
  padding: 2px 6px;
  margin-left: 5px;
  border-radius: 5px;
`;

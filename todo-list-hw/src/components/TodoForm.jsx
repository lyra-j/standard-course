import React, { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

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

  return (
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
  );
};

export default TodoForm;

// styled-components
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

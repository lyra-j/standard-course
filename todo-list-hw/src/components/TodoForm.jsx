import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import InputBox from "../common/InputBox";

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
      <InputBox
        htmlFor="inputTitle"
        id="inputTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="할 일"
      >
        제목
      </InputBox>

      <InputBox
        htmlFor="inputDetail"
        id="inputDetail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        placeholder="상세사항"
      >
        내용
      </InputBox>

      <Button type="submit">+ add</Button>
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

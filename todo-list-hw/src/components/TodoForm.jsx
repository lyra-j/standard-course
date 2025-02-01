import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import InputBox from "../common/InputBox";

const TodoForm = ({ setTodos }) => {
  // 🔸 n개의 input fields state
  const [inputData, setInputData] = useState({
    id: Date.now(),
    title: "",
    detail: "",
    isDone: false,
  });

  // 🔸 n개의 input fields를 관리할 배열
  const inputFields = [
    {
      inputId: "title",
      label: "제목",
      value: inputData.title,
      placeholder: "새로운 할 일",
    },
    {
      inputId: "detail",
      label: "내용",
      value: inputData.detail,
      placeholder: "상세 사항",
    },
  ];

  // 🔸 n개의 input onChange 로직
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputData((prevInput) => ({ ...prevInput, [id]: value }));
  };

  // ✅ CREATE: todo 추가 로직
  const handleSubmit = (e) => {
    e.preventDefault();

    // 제목 || 내용 입력 안내
    if (!inputData.title || !inputData.detail) {
      alert(`제목과 내용을 모두 입력해주세요~!!`);
      return;
    }

    setTodos((prevTodos) => [...prevTodos, inputData]);
    setInputData({
      id: Date.now(),
      title: "",
      detail: "",
      isDone: false,
    });
  };

  return (
    <StForm onSubmit={handleSubmit}>
      {/* input이 여러개일 경우 */}
      {inputFields.map((input) => {
        return (
          <InputBox
            key={input.inputId}
            label={input.label}
            htmlFor={input.inputId}
            id={input.inputId}
            value={input.value}
            onChange={handleInputChange}
            placeholder={input.placeholder}
          ></InputBox>
        );
      })}

      <Button type="submit">+ add</Button>
    </StForm>
  );
};

export default TodoForm;

// styled-components
const StForm = styled.form`
  width: 80%;
  background-color: #67a6916b;
  padding: 12px 16px;
  margin: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

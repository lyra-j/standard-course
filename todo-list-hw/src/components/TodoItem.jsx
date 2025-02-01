import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const TodoItem = ({ todo, handleToggleDone, handleDeleteTodo }) => {
  return (
    <StTodoContainer>
      <StTodoWrapper>
        <StTodoTitle>{todo.title}</StTodoTitle>
        <StTodoDetail>{todo.detail}</StTodoDetail>
      </StTodoWrapper>
      <StButtonWrapper>
        <Button $remove type="button" onClick={() => handleDeleteTodo(todo.id)}>
          - del
        </Button>
        <Button $toggle type="button" onClick={() => handleToggleDone(todo.id)}>
          {!todo.isDone ? "v done" : "not Yet"}
        </Button>
      </StButtonWrapper>
    </StTodoContainer>
  );
};

export default TodoItem;

// styled-components
const StTodoContainer = styled.li`
  background-color: #e3eec2;
  width: 150px;
  padding: 20px;
  border-radius: 10px;
`;
const StTodoWrapper = styled.div`
  margin-bottom: 20px;
`;
const StTodoTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #c46915;
`;
const StTodoDetail = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #534b4b;
`;
const StButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

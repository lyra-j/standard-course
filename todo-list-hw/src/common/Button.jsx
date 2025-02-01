import React from "react";
import styled from "styled-components";

const Button = ({ type, onClick, children }) => {
  return (
    <StButton type={type} onClick={onClick}>
      {children}
    </StButton>
  );
};

export default Button;

// styled-components
const StButton = styled.button`
  font-size: 14px;
  width: 70px;
  height: 30px;
  padding: 4px;
  background-color: #77c0a5;
  color: aliceblue;
  border: 1px solid #094e35;
  border-radius: 5px;
`;

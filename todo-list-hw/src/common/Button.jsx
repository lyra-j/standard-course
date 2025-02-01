import React from "react";
import styled, { css } from "styled-components";

const Button = ({ type, onClick, children, ...props }) => {
  return (
    <StButton type={type} onClick={onClick} {...props}>
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
  color: aliceblue;
  border: none;
  border-radius: 5px;

  ${(props) =>
    props.$remove &&
    css`
      background-color: #e6a462;

      &:hover {
        background-color: #d9822b;
      }
    `}

  ${(props) =>
    props.$toggle &&
    css`
      background-color: #7bc1c6;

      &:hover {
        background-color: #2b9fa8;
      }
    `}

    ${(props) =>
    props.$add &&
    css`
      background-color: #42ac67;

      &:hover {
        background-color: #317e4c;
      }
    `}
`;

import React from "react";
import styled from "styled-components";

const InputBox = ({ inputId, children, value, onChange, placeholder }) => {
  return (
    <StLabel htmlFor={inputId}>
      {children}
      <StInput
        type="text"
        id={inputId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StLabel>
  );
};

export default InputBox;

// styled-components
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

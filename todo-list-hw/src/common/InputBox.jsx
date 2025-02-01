import React from "react";
import styled from "styled-components";

const InputBox = ({ id, label, value, onChange, placeholder }) => {
  return (
    <StLabel htmlFor={id}>
      {label}
      <StInput
        type="text"
        id={id}
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
  font-size: 15px;
  font-weight: 500;
`;
const StInput = styled.input`
  width: 160px;
  height: 20px;
  padding: 2px 6px;
  margin-left: 8px;
  border: 1px solid #094e35;
  border-radius: 5px;
`;

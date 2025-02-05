import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

export const StateControlWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  border: 1px solid #646cff;
  border-radius: 8px;
`;

export const DeepStructure = styled.div`
  flex: 2;
`;

export const LevelContainer = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #646cff;
  border-radius: 8px;
`;

export const MessageDisplayWrapper = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 1rem;
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 4px;
  border: 1px solid #646cff;
  background-color: #1a1a1a;
  color: white;

  &::placeholder {
    color: white;
  }
`;

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  color: white;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 0.5rem;
`;

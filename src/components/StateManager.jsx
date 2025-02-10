import { useState } from "react";
import {
  StateControlWrapper,
  StyledInput,
  StyledButton,
  ButtonGroup,
} from "../styles/StyledComponents";
import { useDispatch } from "react-redux";
import { clearMessage, setMessage } from "../redux/messageSlice";

function StateControl() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setMessage(inputValue));
    setInputValue("");
  };

  const handleReset = () => {
    setInputValue("");
    dispatch(clearMessage(""));
  };

  return (
    <StateControlWrapper>
      <h3>메시지 입력 영역</h3>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <ButtonGroup>
          <StyledButton type="submit">전송</StyledButton>
          <StyledButton type="button" onClick={handleReset}>
            초기화
          </StyledButton>
        </ButtonGroup>
      </form>
    </StateControlWrapper>
  );
}

export default StateControl;

import { useContext } from "react";
import { MessageContext } from '../context/MessageContext';
import {
  LevelContainer,
  MessageDisplayWrapper,
} from "../styles/StyledComponents";

function Level1() {
  return (
    <LevelContainer>
      <h3>Level 1</h3>
      <Level2 />
    </LevelContainer>
  );
}

function Level2() {
  return (
    <LevelContainer>
      <h3>Level 2</h3>
      <Level3 />
    </LevelContainer>
  );
}

function Level3() {
  return (
    <LevelContainer>
      <h3>Level 3</h3>
      <MessageDisplay />
    </LevelContainer>
  );
}

function MessageDisplay() {
  const { message } = useContext(MessageContext);
  return (
    <MessageDisplayWrapper>
      <h3>메시지 표시 영역</h3>
      <p>{message || "아직 메시지가 없습니다..."}</p>
    </MessageDisplayWrapper>
  );
}

export default Level1;

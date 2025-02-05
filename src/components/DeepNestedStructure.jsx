import PropTypes from "prop-types";
import {
  LevelContainer,
  MessageDisplayWrapper,
} from "../styles/StyledComponents";

function Level1({ message }) {
  return (
    <LevelContainer>
      <h3>Level 1</h3>
      <Level2 message={message} />
    </LevelContainer>
  );
}

function Level2({ message }) {
  return (
    <LevelContainer>
      <h3>Level 2</h3>
      <Level3 message={message} />
    </LevelContainer>
  );
}

function Level3({ message }) {
  return (
    <LevelContainer>
      <h3>Level 3</h3>
      <MessageDisplay message={message} />
    </LevelContainer>
  );
}

function MessageDisplay({ message }) {
  return (
    <MessageDisplayWrapper>
      <h3>메시지 표시 영역</h3>
      <p>{message || "아직 메시지가 없습니다..."}</p>
    </MessageDisplayWrapper>
  );
}

Level1.propTypes = {
  message: PropTypes.string,
};

Level2.propTypes = {
  message: PropTypes.string,
};

Level3.propTypes = {
  message: PropTypes.string,
};

MessageDisplay.propTypes = {
  message: PropTypes.string,
};

export default Level1;

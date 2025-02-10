import React, { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  return (
    <MessageContext.Provider value={[message, setMessage]}>
      {children}
    </MessageContext.Provider>
  );
};
MessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

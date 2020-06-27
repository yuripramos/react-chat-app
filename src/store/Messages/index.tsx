import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import io from "socket.io-client";

const MessagesContext = createContext({});
let socket: any;

type Props = {
  children: ReactNode;
};

const defaultState = {
  messages: [
    { from: "Yuri", msg: "hello text1" },
    { from: "Yuri", msg: "hello text2 long" },
    { from: "Robert", msg: "hello text3 very very very long" }
  ]
};

const stateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return { ...state, perPage: action.data };
    default:
      return state;
  }
};

const sendChatAction = (socket: any, value: any) => {
  socket.emit("chat message", value);
};

const MessagesProvider: React.FC<Props> = ({ children }) => {
  const [messageReducer, dispatch] = useReducer(stateReducer, defaultState);

  if (!socket) {
    socket = io(":3005");
  }

  return (
    <MessagesContext.Provider value={{ ...messageReducer, sendChatAction }}>
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContext, MessagesProvider };

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
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};

const sendChatAction = (value: any) => {
  socket.emit("chat message", value);
};

const MessagesProvider: React.FC<Props> = ({ children }) => {
  const [messageReducer, dispatch] = useReducer(stateReducer, defaultState);

  if (!socket) {
    socket = io(":3000");
    socket.on("chat message", function(msg: any) {
      console.log("log", { msg });
      dispatch({
        type: "RECEIVE_MESSAGE",
        payload: msg
      });
    });
  }

  return (
    <MessagesContext.Provider value={{ ...messageReducer, sendChatAction }}>
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContext, MessagesProvider };

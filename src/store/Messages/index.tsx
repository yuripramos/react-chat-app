import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import io from "socket.io-client";

const MessagesContext = createContext({});

let socket: any;

type Props = {
  children: ReactNode;
};

const ActionType = {
  RECEIVE_MESSAGE: "RECEIVE_MESSAGE",
  SET_USERNAME: "SET_USERNAME"
};

const defaultState = {
  messages: [
    { from: "Yuri", msg: "hello text1" },
    { from: "Yuri", msg: "hello text2 long" },
    { from: "Robert", msg: "hello text3 very very very long" }
  ],
  username: `guest${Math.floor(Math.random() * 1000)}`
};

const stateReducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionType.RECEIVE_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case ActionType.SET_USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

const sendChatAction = (value: any) => {
  socket.emit("chat message", value);
};

const MessagesProvider: React.FC<Props> = ({ children }) => {
  const [messageReducer, dispatch] = useReducer(stateReducer, defaultState);

  const setUsername = (username: string) =>
    dispatch({
      type: ActionType.SET_USERNAME,
      payload: username
    });

  const setMessage = (msg: any) =>
    dispatch({
      type: ActionType.RECEIVE_MESSAGE,
      payload: msg
    });

  if (!socket) {
    socket = io(":3000");
    socket.on("chat message", function(msg: any) {
      setMessage(msg);
    });
  }

  return (
    <MessagesContext.Provider
      value={{ ...messageReducer, sendChatAction, setUsername }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContext, MessagesProvider };

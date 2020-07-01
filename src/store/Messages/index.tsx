import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import io from "socket.io-client";
import moment from "moment";

const MessagesContext = createContext({});

let socket: any;

type Props = {
  children: ReactNode;
};

const ActionType = {
  RECEIVE_MESSAGE: "RECEIVE_MESSAGE",
  SET_USERNAME: "SET_USERNAME",
  SET_FORMAT: "SET_FORMAT",
  SET_SENDING_METHOD: "SET_SENDING_METHOD"
};

const defaultState = {
  messages: [] as any,
  username: `guest${Math.floor(Math.random() * 1000)}`,
  format: "12H",
  sendingMethod: "keypress"
};

const stateReducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionType.RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case ActionType.SET_USERNAME:
      return {
        ...state,
        messages: state.messages.map((message: any, index: number) => {
          if (message.from === state.username) {
            message.from = action.payload;
          }
          return message;
        }),
        username: action.payload
      };
    case ActionType.SET_FORMAT:
      return {
        ...state,
        format: action.payload
      };
    case ActionType.SET_SENDING_METHOD:
      return {
        ...state,
        sendingMethod: action.payload
      };
    default:
      return state;
  }
};

const sendChatAction = (value: any, time: any) => {
  socket.emit("chat message", value, time);
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

  const setSendingMethod = (method: string) =>
    dispatch({
      type: ActionType.SET_SENDING_METHOD,
      payload: method
    });

  const setTimeFormat = (format: string) =>
    dispatch({
      type: ActionType.SET_FORMAT,
      payload: format
    });

  if (!socket) {
    socket = io(":3000");
    socket.on("chat message", function(msg: any) {
      setMessage(msg);
    });
  }

  return (
    <MessagesContext.Provider
      value={{
        ...messageReducer,
        sendChatAction,
        setUsername,
        setTimeFormat,
        setSendingMethod
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContext, MessagesProvider };

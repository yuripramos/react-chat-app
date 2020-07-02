import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import { useMessagesState } from "./state";
import io from "socket.io-client";

const MessagesContext = createContext({});

let socket: any;

type Props = {
  children: ReactNode;
};

const sendChatAction = (value: any, time: any) => {
  socket.emit("chat message", value, time);
  socket.emit("new message alert", 1);
};

const MessagesProvider: React.FC<Props> = ({ children }) => {
  const {
    messageReducer,
    modifiers: {
      setUsername,
      setMessage,
      setUnreadMessage,
      setSendingMethod,
      setTimeFormat,
      setDynamicHeight
    }
  } = useMessagesState();

  if (!socket) {
    socket = io(":3000");
    socket.on("chat message", function(msg: any) {
      setMessage(msg);
      window.location.pathname !== "/"
        ? setUnreadMessage(true)
        : setUnreadMessage(false);
    });
  }

  return (
    <MessagesContext.Provider
      value={{
        ...messageReducer,
        sendChatAction,
        setUsername,
        setTimeFormat,
        setSendingMethod,
        setUnreadMessage,
        setDynamicHeight
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContext, MessagesProvider };

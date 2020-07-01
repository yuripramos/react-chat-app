import React, { createContext, useReducer, useEffect, ReactNode } from "react";

const ActionType = {
  RECEIVE_MESSAGE: "RECEIVE_MESSAGE",
  SET_USERNAME: "SET_USERNAME",
  SET_FORMAT: "SET_FORMAT",
  SET_SENDING_METHOD: "SET_SENDING_METHOD",
  SET_UNREAD_MESSAGE: "SET_UNREAD_MESSAGE"
};

const defaultState = {
  messages: [] as any,
  username: `guest${Math.floor(Math.random() * 1000)}`,
  format: "12H",
  sendingMethod: "keypress",
  isUnreadMessages: false
};

interface MessageState {
  loading: boolean;
  baseTicket: any;
  showPreviousDetection: boolean;
  previousDetectionDate: number | null;
  previousDetection: any;
}

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
    case ActionType.SET_UNREAD_MESSAGE:
      return {
        ...state,
        isUnreadMessages: action.payload
      };
    default:
      return state;
  }
};

export const useMessagesState: () => {
  messageReducer: MessageState;
  modifiers: StateModifiers;
} = () => {
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
  const setUnreadMessage = (isUnread: boolean) =>
    dispatch({
      type: ActionType.SET_UNREAD_MESSAGE,
      payload: isUnread
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

  return {
    messageReducer,
    modifiers: {
      setUsername,
      setMessage,
      setUnreadMessage,
      setSendingMethod,
      setTimeFormat
    }
  };
};

interface StateModifiers {
  setUsername: (username: string) => void;
  setMessage: (msg: any) => void;
  setUnreadMessage: (isUnread: boolean) => void;
  setSendingMethod: (method: string) => void;
  setTimeFormat: (format: string) => void;
}

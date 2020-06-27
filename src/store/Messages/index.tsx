import React, { createContext, useReducer, useEffect, ReactNode } from "react";

import { getPosts } from "../../../src/services/api";

// const getLocalStorageState = () => {
//   const lsState = getStorageObject(STORAGE_ID);
//   return lsState ? lsState : INITIAL_STATE;
// };

// const setLocalStorageState = (state: any) =>
//   setStorageObject(STORAGE_ID, state);

const MessagesContext = createContext([]);

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

const MessagesProvider: React.FC<Props> = ({ children }) => {
  const valueContext = useReducer(stateReducer, defaultState);

  return (
    <MessagesContext.Provider value={valueContext}>
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContext, MessagesProvider };

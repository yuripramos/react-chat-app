import React, { createContext, useState, useEffect, ReactNode } from "react";

import { getPosts } from "../../../src/services/api";
import {
  getStorageObject,
  setStorageObject,
  areEqualObjects
} from "../../utils/helpers";

const STORAGE_ID = "chat-app-storage";

const INITIAL_STATE = {
  data: [] as any[],
  loaded: true,
  error: false
};

const getLocalStorageState = () => {
  const lsState = getStorageObject(STORAGE_ID);
  return lsState ? lsState : INITIAL_STATE;
};

const setLocalStorageState = (state: any) =>
  setStorageObject(STORAGE_ID, state);

const MessagesContext = createContext({});

type Props = {
  children: ReactNode;
};

const MessagesProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(getLocalStorageState);
  const updateState = (payload: any) =>
    setState((state: any) => ({ ...state, ...payload }));
  const providerValue = { state, setState: updateState };

  useEffect(() => {
    areEqualObjects(state, INITIAL_STATE) &&
      (async () => {
        try {
          updateState({ loaded: false });
          const { data } = await getPosts();
          updateState({ data });
        } catch (error) {
          console.error(error);
          updateState({ error: true });
        } finally {
          updateState({ loaded: true });
        }
      })();
  }, []); //eslint-disable-line

  useEffect(() => {
    setLocalStorageState(state);
  }, [state]);

  return (
    <MessagesContext.Provider value={providerValue}>
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContext, MessagesProvider };

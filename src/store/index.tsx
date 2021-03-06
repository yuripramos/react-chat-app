import React, { ReactNode } from "react";
import { MessagesProvider } from "./Messages/index";

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => {
  return <MessagesProvider>{children}</MessagesProvider>;
};

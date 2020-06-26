import React, { useContext } from "react";

import MessageList from "../MessageList/index";
import { MessagesContext } from "../../store/Messages/index";
import { sortObjectsArrayByKey } from "../../utils/helpers";
export default () => {
  const { state: messages }: any = useContext(MessagesContext);
  const sortedDescPosts = sortObjectsArrayByKey(
    messages.data,
    ["metadata", "publishedAt"],
    true
  );

  return <MessageList data={sortedDescPosts} />;
};

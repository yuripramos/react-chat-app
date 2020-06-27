import React, { useContext, Fragment } from "react";
import "./styles.scss";
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

  return (
    <Fragment>
      <MessageList data={sortedDescPosts} />
      <div className="textField">
        <input type="text" placeholder="type your message" />
        <button type="submit"> send </button>
      </div>
    </Fragment>
  );
};

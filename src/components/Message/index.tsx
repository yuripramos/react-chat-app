import React, { useContext } from "react";
import { MessagesContext } from "../../store/Messages/index";
import moment from "moment";

type Message = {
  data: {
    from: string;
    msg: string;
    time: Date;
  };
  username: string;
};

export default ({ data: { from, msg, time }, username }: Message) => {
  const sameUserMessage = username === from ? "sameUser post" : "post";
  const isSameUserMessage = sameUserMessage.includes("sameUser");
  const state: any = useContext(MessagesContext);

  const isDefaultFormatTime = (format: string) => format === "12H";

  const renderTime = isDefaultFormatTime(state.format)
    ? moment(time).format("LT")
    : moment(time).format("HH:mm");

  return (
    <li className={sameUserMessage}>
      <span>
        {!isSameUserMessage ? `${from}, ${renderTime}` : `${renderTime}`}
        &nbsp;
      </span>
      <p className="message-wrapper">{msg}</p>
    </li>
  );
};

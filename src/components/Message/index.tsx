import React from "react";

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

  console.log("time", time);
  return (
    <li className={sameUserMessage}>
      <span>
        {!isSameUserMessage ? `${from}, ${time} ` : `${time}`}
        &nbsp;
      </span>
      <p className="message-wrapper">{msg}</p>
    </li>
  );
};

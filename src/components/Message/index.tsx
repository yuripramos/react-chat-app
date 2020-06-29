import React from "react";

type Message = {
  data: {
    from: string;
    msg: string;
  };
  username: string;
};

export default ({ data: { from, msg }, username }: Message) => {
  const sameUserMessage = username === from ? "sameUser post" : "post";

  return (
    <li className={sameUserMessage}>
      <span>{from}: &nbsp; </span>
      <p className="message-wrapper">{msg}</p>
    </li>
  );
};

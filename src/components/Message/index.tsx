import React, { useEffect } from "react";

type Message = {
  data: {
    from: string;
    msg: string;
  };
  username: string;
};

export default ({ data: { from, msg }, username }: Message) => {
  const sameUserMessage = username === from ? "sameUser post" : "post";

  console.log(sameUserMessage);

  return (
    <li className={sameUserMessage}>
      <span>{from}: &nbsp; </span>
      <p>{msg}</p>
    </li>
  );
};

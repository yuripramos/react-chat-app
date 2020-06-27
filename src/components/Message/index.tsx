import React from "react";

type Message = {
  data: {
    from: string;
    msg: string;
  };
};

export default ({ data: { from, msg } }: Message) => {
  return (
    <li className="post">
      <span>{from}: </span>
      <p>{msg}</p>
    </li>
  );
};

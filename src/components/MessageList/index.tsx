import React from "react";

import Message from "../Message/index";
import NoContent from "../NoContent/index";

type Props = {
  messages: [
    {
      from: string;
      msg: string;
    }
  ];
};

export default ({ messages }: Props) => {
  const hasMsgs = messages.length > 0;

  return (
    <section>
      {hasMsgs ? (
        <ul className="posts">
          {messages.map((msg, i) => (
            <Message key={i} data={msg} />
          ))}
        </ul>
      ) : (
        <NoContent />
      )}
    </section>
  );
};

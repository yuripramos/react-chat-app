import React, { useContext } from "react";

import Message from "../Message/index";
import NoContent from "../NoContent/index";

type Props = {
  messages: [
    {
      from: string;
      msg: string;
    }
  ];
  username: string;
};

export default ({ messages, username }: Props) => {
  const hasMsgs = messages.length > 0;

  return (
    <section>
      {hasMsgs ? (
        <ul className="posts">
          {messages.map((msg, i) => (
            <Message key={i} data={msg} username={username} />
          ))}
        </ul>
      ) : (
        <NoContent />
      )}
    </section>
  );
};

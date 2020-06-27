import React from "react";

import Message from "../Message/index";
import NoContent from "../NoContent/index";

type Props = {
  state: {
    messages: [
      {
        from: string;
        msg: string;
      }
    ];
  };
};

export default ({ state }: Props) => {
  const hasMsgs = state.messages.length > 0;

  return (
    <section>
      {hasMsgs ? (
        <ul className="posts">
          {state.messages.map((msg, i) => (
            <Message key={i} data={msg} />
          ))}
        </ul>
      ) : (
        <NoContent />
      )}
    </section>
  );
};

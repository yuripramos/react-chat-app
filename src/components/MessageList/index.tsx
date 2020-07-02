import React, { useEffect } from "react";
import useDimensions from "react-use-dimensions";
import Message from "../Message/index";
import NoContent from "../NoContent/index";

type Props = {
  messages: [
    {
      from: string;
      msg: string;
      time: Date;
    }
  ];
  username: string;
  setDynamicHeight: (height: number) => void;
};

export default ({ messages, username, setDynamicHeight }: Props) => {
  const hasMsgs = messages.length > 0;

  const [ref, { height }] = useDimensions();

  useEffect(() => {
    setDynamicHeight(height);
  }, [height]);

  return (
    <section ref={ref}>
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

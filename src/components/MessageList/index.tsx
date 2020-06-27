import React, { useState, useEffect } from "react";

import Message from "../Message/index";
import NoContent from "../NoContent/index";

type Props = {
  data: any;
};

export default ({ data }: Props) => {
  const msgs = [
    { from: "myself", msg: "hi" },
    { from: "myself", msg: "hi 2" },
    { from: "myself", msg: "hi 33" }
  ];
  const hasMsgs = msgs.length > 0;

  return (
    <section>
      {hasMsgs ? (
        <ul className="posts">
          {msgs.map((post, i) => (
            <Message key={i} data={post} />
          ))}
        </ul>
      ) : (
        <NoContent />
      )}
    </section>
  );
};

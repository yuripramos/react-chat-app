import React, { useState, useEffect } from "react";

import Message from "../Message/index";
import NoContent from "../NoContent/index";

const getKey = (post: any) => {
  const { authorId, publishedAt } = post.metadata;
  return `post-${authorId}-${publishedAt}`;
};

type Props = {
  data: any;
};

export default ({ data }: Props) => {
  const [msgs, setMsgs] = useState([]);
  const hasMsgs = msgs.length > 0;

  useEffect(() => {
    setMsgs(data);
  }, [data]);

  return (
    <section>
      {hasMsgs ? (
        <ul className="posts">
          {msgs.map(post => (
            <Message key={getKey(post)} id={getKey(post)} data={post} />
          ))}
        </ul>
      ) : (
        <NoContent />
      )}
    </section>
  );
};

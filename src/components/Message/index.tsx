import React from "react";
import { getDate } from "../../utils/helpers";

type Post = {
  data: {
    title: string;
    body: string;
    metadata: {
      authorId: string;
      publishedAt: string;
    };
  };
  id: string;
};

export default ({ data: { title, body, metadata }, id }: Post) => {
  const { authorId, publishedAt } = metadata;

  return (
    <li className="post" id={id}>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <p>{body}</p>
      </main>
    </li>
  );
};

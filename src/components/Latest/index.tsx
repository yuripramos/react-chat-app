import React from 'react';

export default ({ data }: any) => {
  const {
    title,
    metadata: { authorId, publishedAt },
  } = data;

  const postId = `post-${authorId}-${publishedAt}`;

  const handleClick = (e: any) => {
    e.preventDefault();
    const targetElement = document.getElementById(postId);
    if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <li className="latest">
      <a onClick={handleClick} href={`#${postId}`} data-testid="latest" title={`Read the post "${title}"`}>
        {title}
      </a>
    </li>
  );
};

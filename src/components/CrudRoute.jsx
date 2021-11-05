import React from 'react';
export default function CRUDRoute({ method, url }) {
  return (
    <article>
      <div>{method}</div>
      <span>{url}</span>
    </article>
  );
}

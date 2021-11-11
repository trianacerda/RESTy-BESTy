import React from 'react';
export default function CRUDRoutes({ method, url }) {
  return (
    <article>
      <div>{method}</div>
      <span>{url}</span>
    </article>
  );
}

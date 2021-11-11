import React from 'react';
import CrudRoute from './CrudRoute';

export default function CRUDHistory({ crudRoutes }) {
  const CRUDList = crudRoutes.map(({ method, url }) => {
    <li key={`${method}-${url}`}>
      <CrudRoute method={method} url={url} />
    </li>;
  });
  return <ul aria-label="crud-history">{CRUDList}</ul>;
}

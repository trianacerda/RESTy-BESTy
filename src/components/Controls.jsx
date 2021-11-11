import React from 'react';

export default function Controls({
  onSubmit,
  onUrlChange,
  onRadioChange,
  method,
  json,
  url,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        id="url"
        title="url"
        text="text"
        placeholder="API URL"
        value={url}
        onChange={onUrlChange}
      />

      <input
        type="radio"
        id="get"
        name="method"
        value="GET"
        onChange={onRadioChange}
        // checked={method === 'GET'}
      />
      <label htmlFor="get" style={{ border: 'solid', color: 'darkgoldenrod' }}>
        GET
      </label>

      <input
        type="radio"
        id="post"
        name="method"
        value="POST"
        onChange={onRadioChange}
        // checked={method === 'POST'}
      />
      <label htmlFor="post" style={{ border: 'solid', color: 'teal' }}>
        POST
      </label>

      <input
        type="radio"
        id="put"
        name="method"
        value="PUT"
        onChange={onRadioChange}
        // checked={method === 'PUT'}
      />
      <label htmlFor="put" style={{ border: 'solid', color: 'darkgoldenrod' }}>
        PUT
      </label>

      <input
        type="radio"
        id="patch"
        name="method"
        value="PATCH"
        onChange={onRadioChange}
        // checked={method === 'PATCH'}
      />
      <label htmlFor="patch" style={{ border: 'solid', color: 'teal' }}>
        PATCH
      </label>

      <input
        type="radio"
        id="delete"
        name="method"
        value="DELETE"
        onChange={onRadioChange}
        // checked={method === 'DELETE'}
      />
      <label
        htmlFor="delete"
        style={{ border: ' solid', color: 'darkgoldenrod' }}
      >
        DELETE
      </label>

      <button aria-label="btn">Send!!</button>

      <textarea
        name="json-body"
        value={json}
        placeholder="Raw JSON Body"
        onChange={onRadioChange}
      ></textarea>
    </form>
  );
}

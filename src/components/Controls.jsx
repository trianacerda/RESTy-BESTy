import React from 'react';

export default function Controls({
  onSubmit,
  onUrlChange,
  onMethodChange,
  json,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        id="url"
        title="url"
        text="text"
        placeholder="API URL"
        onChange={onUrlChange}
      />

      <input
        type="radio"
        id="get"
        name="method"
        value="get"
        onChange={onUrlChange}
        checked={onMethodChange}
      />
      <label style={{ border: 'solid', color: 'darkgoldenrod' }}>GET</label>

      <input
        type="radio"
        id="post"
        name="method"
        value="post"
        onChange={onUrlChange}
        checked={onMethodChange}
      />
      <label style={{ border: 'solid', color: 'teal' }}>POST</label>

      <input
        type="radio"
        id="put"
        name="method"
        value="put"
        onChange={onUrlChange}
        checked={onMethodChange}
      />
      <label style={{ border: 'solid', color: 'darkgoldenrod' }}>PUT</label>

      <input
        type="radio"
        id="post"
        name="method"
        value="post"
        onChange={onUrlChange}
        checked={onMethodChange}
      />
      <label style={{ border: 'solid', color: 'teal' }}>PATCH</label>

      <input
        type="radio"
        id="delete"
        name="method"
        value="delete"
        onChange={onUrlChange}
        checked={onMethodChange}
      />
      <label style={{ border: ' solid', color: 'darkgoldenrod' }}>DELETE</label>

      <button aria-label="btn">Send!!</button>

      <textarea
        name="json-body"
        value={json}
        placeholder="Raw JSON Body"
        onChange={onUrlChange}
      ></textarea>
    </form>
  );
}

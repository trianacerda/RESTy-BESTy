import React from 'react';

export default function Controls({
  url,
  onSubmit,
  onUrlChange,
  onMethodChange,
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
    </form>
  );
}

//form
//label
//url input -- text entry
//radio btns -- actions/handlers
//get
//put
//post
//patch
//delete
//submit btn
//raw JSON body -- text entry

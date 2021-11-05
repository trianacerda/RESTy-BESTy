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
        checked="unchecked"
      />
      <label>GET</label>

      <input
        type="radio"
        id="post"
        name="method"
        value="post"
        onChange={onUrlChange}
        checked="unchecked"
      />
      <label>POST</label>

      <input
        type="radio"
        id="put"
        name="method"
        value="put"
        onChange={onMethodChange}
        checked="unchecked"
      />
      <label>PUT</label>

      <input
        type="radio"
        id="post"
        name="method"
        value="post"
        onChange={onMethodChange}
        checked="unchecked"
      />
      <label>PATCH</label>

      <input
        type="radio"
        id="delete"
        name="method"
        value="delete"
        onChange={onMethodChange}
        checked="unchecked"
      />
      <label>DELETE</label>
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

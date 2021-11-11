import React from 'react';
import ReactJson from 'react-json-view';

export default function JsonResponse(response) {
  return (
    <figure>
      <figcaption>
        <label htmlFor="text-response" name="text-response">
          FETCHED DATA:
        </label>
        <ReactJson
          src={response}
          id="text-response"
          name="text-response"
          theme="monokai"
        >
          {response}
        </ReactJson>
      </figcaption>
    </figure>
  );
}

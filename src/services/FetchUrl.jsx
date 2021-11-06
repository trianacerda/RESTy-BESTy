export const fetchUrl = async (method, url, body = null) => {
  const response = await fetch(url, {
    method,
    [body
      ? 'headers'
      : {
          'Content-Type': 'application/json',
        }]: null,
    [body ? body : body]: null,
  });

  return response.json();
};

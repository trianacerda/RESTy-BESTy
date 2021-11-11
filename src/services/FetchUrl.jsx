export const fetchUrl = async ({ url, method, body = null }) => {
  console.log('method:', method, 'url:', url, 'body:', body);
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

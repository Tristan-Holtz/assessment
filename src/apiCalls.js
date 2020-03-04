export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls').then(response =>
    response.json()
  );
};

export const postUrl = (url, title) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ long_url: url, title: title }),
    headers: { 'Content-Type': 'application/json' }
  };
  return fetch('http://localhost:3001/api/v1/urls', options).then(response =>
    response.json()
  );
};

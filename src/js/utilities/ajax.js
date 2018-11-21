export const get = url => fetch(url, {
  method: 'GET',
  headers: {
    Authorization: 'Token MDplNGE1NjAzYS1lYzZkLTExZTgtOGZlNy0zZjUyNTkwNGIyMDM6V091RWEzVkV0TXphVnBvM0szaENoY2hPZ2N1bjdtTVcwdzRC',
  },
}).then((response) => {
  if (response.ok) {
    return response.json();
  }

  throw new Error(response);
}).then(response => response);

export const post = (url, body) => fetch(url, {
  method: 'POST',
  headers: {
    Authorization: 'Token MDplNGE1NjAzYS1lYzZkLTExZTgtOGZlNy0zZjUyNTkwNGIyMDM6V091RWEzVkV0TXphVnBvM0szaENoY2hPZ2N1bjdtTVcwdzRC',
  },
  body: JSON.stringify(body),
}).then((response) => {
  if (response.ok) {
    return response.json();
  }

  throw new Error(response);
}).then(response => response);

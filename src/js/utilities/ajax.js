export const get = url => fetch(url, {
  method: 'GET',
  headers: {
    Authorization: 'Token MDphMjY4NWQxZS1lZDJlLTExZTgtODMyZi01Zjc3MWMzMzMyNzM6bGtibzFQcHpBWTVYbmRLdUJzaXZXSGFhNzZyS3JUcURja2tt',
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
    Authorization: 'Token MDphMjY4NWQxZS1lZDJlLTExZTgtODMyZi01Zjc3MWMzMzMyNzM6bGtibzFQcHpBWTVYbmRLdUJzaXZXSGFhNzZyS3JUcURja2tt',
  },
  body: JSON.stringify(body),
}).then((response) => {
  if (response.ok) {
    return response.json();
  }

  throw new Error(response);
}).then(response => response);

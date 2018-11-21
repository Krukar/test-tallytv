export const get = url => fetch(url, {
  method: 'GET',
  headers: {
    Authorization: 'Token MDpiZDBlMDdhNC1lZDNkLTExZTgtOWQ5NC1hYjk5NGI1MmQ3ZGY6akZSOUsxMU5iQll6anV2RjZDbmxYc3pmQnpsNkFUQzJtbTVZ',
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
    Authorization: 'Token MDpiZDBlMDdhNC1lZDNkLTExZTgtOWQ5NC1hYjk5NGI1MmQ3ZGY6akZSOUsxMU5iQll6anV2RjZDbmxYc3pmQnpsNkFUQzJtbTVZ',
  },
  body: JSON.stringify(body),
}).then((response) => {
  if (response.ok) {
    return response.json();
  }

  throw new Error(response);
}).then(response => response);

const getFetch = url =>
  fetch(url)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.log(err));

const postFetch = (url, body) =>
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.log(err));

export {getFetch, postFetch};

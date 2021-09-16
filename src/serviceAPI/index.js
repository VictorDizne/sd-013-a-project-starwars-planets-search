const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

function fetchAPI() {
  return fetch(url)
    .then((response) => response.json()
      .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))));
}

export default fetchAPI;

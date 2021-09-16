const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function ApiStarWars() {
  return fetch(URL)
    .then((result) => result.json()
      .then((data) => (result.ok ? Promise.resolve(data) : Promise.reject(data))));
}

export default ApiStarWars;

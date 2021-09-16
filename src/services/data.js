const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsApi = () => (
  fetch(PLANETS_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanetsApi;

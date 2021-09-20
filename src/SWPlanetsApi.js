const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApi = () => (
  fetch(endpoint)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default fetchApi;

const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function searchPlanets() {
  return (
    fetch(PLANETS_API)
      .then((request) => request.json())
      .then(({ results }) => results)
  );
}

export default searchPlanets;

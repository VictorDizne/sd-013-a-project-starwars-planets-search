const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsData = async () => {
  const getPlanetsFetch = await fetch(PLANETS_API);
  const data = await getPlanetsFetch.json().then(({ results }) => results);
  return data;
};

export default getPlanetsData;

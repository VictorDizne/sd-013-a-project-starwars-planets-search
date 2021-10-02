const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

// requisição braba in line a lá Rogerio Silva
const getPlanetsData = async () => ((await (await fetch(PLANETS_API)).json()).results);
/* const getPlanetsFetch = await fetch(PLANETS_API);
  const data = await getPlanetsFetch.json().then(({ results }) => results);
  return data; */

export default getPlanetsData;

const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  const response = await fetch(url);
  const json = await response.json();
  const { results } = json;
  results.forEach((planets) => delete planets.residents);
  return results;
}

export default fetchPlanets;

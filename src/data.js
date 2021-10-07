async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await response.json();
  const { results } = json;
  results.forEach((planet) => delete planet.residents);
  return results;
}

export default fetchPlanets;

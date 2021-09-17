async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetData = await response.json();
  return planetData.results;
}

export default fetchPlanets;

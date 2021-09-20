async function fetchApi() {
  const fetchPlanetsApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planets = await fetchPlanetsApi.json();
  return planets;
}

export default fetchApi;

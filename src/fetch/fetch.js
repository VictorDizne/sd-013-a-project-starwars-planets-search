async function fetchApi() {
  const fetchPlanetsApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const response = await fetchPlanetsApi.json();
  return response;
}

export default fetchApi;

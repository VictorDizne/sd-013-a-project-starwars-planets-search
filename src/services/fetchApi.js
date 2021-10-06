export const fetchPlanets = async () => {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results } = await request.json();
  return results;
};

export default fetchPlanets;

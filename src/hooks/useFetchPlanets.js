const useFetchPlanets = async () => {
  const API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const data = await (await fetch(API)).json();
  const { results } = data;
  return results;
};

export default useFetchPlanets;

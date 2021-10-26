const getStarwars = async () => {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
  return result;
};
export default getStarwars;

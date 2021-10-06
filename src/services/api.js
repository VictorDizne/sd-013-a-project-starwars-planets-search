const fetchStarWarsPlanets = async () => {
  const search = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const response = await search.json();
  const { results } = response;

  return results; // Retorna o array
};

export default fetchStarWarsPlanets;

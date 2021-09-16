const fetchPlanets = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const data = await fetch(url)
    .then((response) => response.json())
    .then((response) => response.results);
  return data;
};

export default fetchPlanets;

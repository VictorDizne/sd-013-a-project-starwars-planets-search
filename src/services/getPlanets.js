const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const { results } = await fetch(url).then((response) => response.json());
  console.log(results);
  return results;
};

export default getPlanets;

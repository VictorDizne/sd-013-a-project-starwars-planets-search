const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getStarWarsPlanets = async () => {
  const response = await (await fetch(URL)).json();
  const data = response.results;
  data.forEach((element) => {
    delete element.residents;
  });
  return data;
};

export default getStarWarsPlanets;

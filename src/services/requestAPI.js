const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getStarWarsPlanets = async () => {
  const response = await (await fetch(URL)).json();
  const data = response.results;
  data.forEach((element) => {
    delete element.residents;
  });
  return data.sort((a, b) => {
    const magicN = -1;
    const magicP = 1;
    if (a.name > b.name) return magicP;
    if (a.name < b.name) return magicN;
    return 0;
  });
};

export default getStarWarsPlanets;

const fetchStarWarsAPI = async (setData) => {
  const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results } = await fetchAPI.json();
  const resultsWithoutResidents = results.filter((result) => delete result.residents);
  setData(resultsWithoutResidents);
};

export default fetchStarWarsAPI;

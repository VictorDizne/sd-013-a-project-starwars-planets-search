const fetchApi = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(endpoint).then((result) => result.json());
  console.log(results);
  return results;
};

export default fetchApi;

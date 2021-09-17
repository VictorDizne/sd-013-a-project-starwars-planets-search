const reqAPI = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(url)
    .then((response) => response.json());
  return results;
};

export default reqAPI;

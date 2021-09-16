const fetchApi = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  if (!response.ok) return console.log('Ocorreu um erro!');
  const data = await response.json();
  return data.results;
};

export default fetchApi;

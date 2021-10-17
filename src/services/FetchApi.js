const endPointApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApiData = async () => {
  const getPlanets = await fetch(endPointApi);
  const { results } = await getPlanets.json();
  // REQ 1-Acada iteração no Obj results, é preciso remover a chave residents
  // Pois inicialmente, não será utilizada para preencher a tabela. Logo.
  results.forEach((element) => delete element.residents);
  return results;
};

export default fetchApiData;

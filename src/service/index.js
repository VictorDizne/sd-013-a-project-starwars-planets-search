// endepoint indicado para fazer a requisição dos planetas
const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function getPlanets() {
  return fetch(endpoint) // p pegar isso em outro canto, preciso usar o
    // return... sempre esqueço
    .then((response) => response.json()) // retorna uma promise
    .then((result) => result.results) // poha, era isso aqui...
    // aqui tô pegando um array de objetos, aqui tá correto...
    // aqui tá ok, o retorno daqui é o array q eu quero...
    .catch((err) => {
      // trata se alguma das promises falhar
      console.error('Failed retrieving information', err);
    });
}

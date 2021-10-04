// esta é a API dos Star Wars Planets Original, favor referenciar no Readme
const ENDPOINT = 'https://swapi.dev/api/planets';

export default async function fetchPlanets(setData, INIT_STATE) {
  const { results } = await (await fetch(ENDPOINT)).json();
  // Josué Lobo é um Gênio
  results.forEach((result) => delete result.residents);
  setData({ ...INIT_STATE, planets: results });
}

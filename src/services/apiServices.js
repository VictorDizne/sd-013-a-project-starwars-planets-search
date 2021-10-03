const ENDPOINT = 'https://swapi.dev/api/planets';

export default async function fetchAPI(setData, INIT_STATE) {
  const { results } = await (await fetch(ENDPOINT)).json();
  // Josué Lobo é um Gênio
  results.forEach((result) => delete result.residents);
  setData({ ...INIT_STATE, planets: results });
}

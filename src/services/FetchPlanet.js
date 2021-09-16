const URL = 'https://swapi-trybe.herokuapp.com/api/planets';

export default async function fetchStar() {
  try {
    const results = await fetch(URL);
    const data = await results.json();
    const clearResidents = data.results.map((planet) => {
      delete planet.residents;
      return planet;
    });
    return clearResidents;
  } catch (error) {
    return error.message;
  }
}

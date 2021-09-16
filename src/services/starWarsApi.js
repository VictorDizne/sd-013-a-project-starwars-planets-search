const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function getPlanetsFetch() {
  try {
    const fetchResult = await fetch(URL);
    const planets = await fetchResult.json();
    return planets;
  } catch (error) {
    console.error(error);
  }
}

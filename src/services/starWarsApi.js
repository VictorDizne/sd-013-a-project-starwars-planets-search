const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
// const URLDEV = 'https://swapi.dev/api/planets/';

export default async function getPlanetsFetch() {
  try {
    const fetchResult = await fetch(URL);
    const planets = await fetchResult.json();
    return planets;
  } catch (error) {
    console.error(error);
  }
}

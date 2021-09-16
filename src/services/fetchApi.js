export const fetchPlanets = async () => {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results } = await request.json();
  return results;
};

export const fetchMovies = async (film) => {
  const request = await fetch(film);
  const { title } = await request.json();
  return title;
};

async function getPlanets() {
  const data = await fetch('https://swapi-trybe.herokuapp.com/api/planets')
    .then((response) => response.json())
    .then(({ results }) => results)
    .catch((err) => err.message);

  return data;
}

export default getPlanets;

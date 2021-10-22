import { useEffect, useState } from 'react';

function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [planetsKeys, setPlanetsKeys] = useState([]);

  useEffect(() => {
    const fetchPlanetsApi = async () => {
      const fetchURL = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const jsonApi = await fetchURL.json();
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      // Tive que copiar uma forma de sort do Mozilla.
      const NEGATIVE = -1;
      const results = jsonApi.results.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return NEGATIVE;
        }
        return 0;
      });

      const removeResidents = results.map((planet) => {
        const object = planet;
        delete planet.residents;
        return object;
      });
      const removeKey = Object.keys(results[0]);
      setPlanets(removeResidents);
      setPlanetsKeys(removeKey);
    };
    fetchPlanetsApi();
  }, []);
  return { planets, planetsKeys, setPlanets };
}

export default usePlanets;

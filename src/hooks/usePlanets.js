import { useEffect, useState } from 'react';

function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [planetsKeys, setPlanetsKeys] = useState([]);

  useEffect(() => {
    const fetchPlanetsApi = async () => {
      const fetchURL = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const jsonApi = await fetchURL.json();
      const resultsReq = jsonApi.results.sort((a, b) => a.name - b.name);
      const removeResidents = resultsReq.map((planet) => {
        const object = planet;
        delete planet.residents;
        return object;
      });
      const removeKey = Object.keys(resultsReq[0]);
      setPlanets(removeResidents);
      setPlanetsKeys(removeKey);
    };
    fetchPlanetsApi();
  }, []);
  return { planets, planetsKeys, setPlanets };
}

export default usePlanets;

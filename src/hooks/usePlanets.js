import { useState, useEffect } from 'react';

function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [planetsKeys, setPlanetsKeys] = useState([]);

  useEffect(() => {
    const fetchPlanetsAPI = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const thePlanets = await response.json();
      const { results } = thePlanets;
      const removeResidents = results.map((planet) => {
        const object = planet;
        delete planet.residents;
        return object;
      });
      const removePlanetKey = Object.keys(results[0]);

      setPlanets(removeResidents);
      setPlanetsKeys(removePlanetKey);
    };
    fetchPlanetsAPI();
  }, []);

  return { planets, planetsKeys, setPlanets };
}

export default usePlanets;

import { useState, useEffect } from 'react';

function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [planetsKeys, setPlanetsKeys] = useState([]);

  useEffect(() => {
    const fetchPlanetsAPI = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const result = await response.json();
      const { results } = result;
      // Solução sugerida pelo Leonardo Santos - Turma 13 - Tribo A
      const removeResidents = results.map((planet) => {
        const object = planet;
        delete planet.residents;
        return object;
      });
      const removeKey = Object.keys(results[0]);
      // console.log(removeResidents.filter((planet) => planet.surface_water < 40));
      setPlanets(removeResidents);
      setPlanetsKeys(removeKey);
    };
    fetchPlanetsAPI();
  }, []);

  return { planets, planetsKeys, setPlanets };
}

export default usePlanets;

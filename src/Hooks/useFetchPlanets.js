import { useEffect, useState } from 'react';

function useFetchPlanets() {
  const [planets, setPlanets] = useState([]);
  const [heads, setHeads] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchPlanets = await fetch(url);
      const data = await fetchPlanets.json();
      const { results } = data;
      const filterPlanets = results.map((result) => {
        const resultFiltered = result;
        delete resultFiltered.residents;
        return resultFiltered;
      });
      setPlanets(filterPlanets);
      const keysHeads = Object.keys(filterPlanets[0]);
      setHeads(keysHeads);
    }
    fetchData();
  }, []);

  return ({ planets, setPlanets, heads });
}

export default useFetchPlanets;

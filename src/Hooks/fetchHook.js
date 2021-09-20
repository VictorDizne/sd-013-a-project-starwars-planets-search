import { useEffect, useState } from 'react';

export default function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function fetchResult() {
      const fetchData = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await fetchData.json();
      const filteredData = results.map((result) => {
        const resultFilter = result;
        delete resultFilter.residents;
        return resultFilter;
      });
      setPlanets(filteredData);
      const keys = Object.keys(filteredData[0]);
      setTitles(keys);
    }
    fetchResult();
  }, []);

  return { planets, setPlanets, titles };
}

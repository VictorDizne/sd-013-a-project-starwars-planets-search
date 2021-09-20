import { useEffect, useState } from 'react';

export default function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      const fetchData = await fetch(' https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await fetchData.json();
      const filterData = results.map((result) => {
        const filterResult = result;
        delete filterResult.residents;
        return filterResult;
      });
      setPlanets(filterData);
      const keys = Object.keys(filterData[0]);
      setTitles(keys);
    }
    fetchResults();
  }, []);

  return { planets, setPlanets, titles };
}

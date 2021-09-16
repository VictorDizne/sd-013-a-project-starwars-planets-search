import { useEffect, useState } from 'react';
import getData from '../services';

const usePlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [titles, setTitles] = useState([]);
  const [next, setNext] = useState('');

  useEffect(() => {
    getData().then((planetsFromApi) => {
      const planetsArr = planetsFromApi.results;
      const planetsFiltered = planetsArr.map((planet) => {
        const obj = planet;
        delete planet.residents;
        return obj;
      });
      setPlanets(planetsFiltered);
      setNext(planetsFromApi.next);
      setTitles(Object.keys(planetsFromApi.results[0]));
    });
  }, []);

  return { planets, titles, next, setPlanets, setNext };
};

export default usePlanets;

import { useEffect, useContext, useState } from 'react';
import MyContext from '../context/myContext';
import usePlanets from './useFetch';

export default function useFilter() {
  /* const { planets } = usePlanets(); */
  /* const { stateFiltered } = useContext(MyContext); */
  /* const [planetsFiltered, setPlanetsFiltered] = useState([]); */

  /* const { filter: { columm, quantity, number } } = stateFiltered; */

  useEffect(() => {
    const quantidade = (planet, columm, quantity, number) => {
      switch (quantity) {
      case 'maior que':
        return Number(planet[columm]) > number;
      case 'menor que':
        return Number(planet[columm]) < number;
      case 'igual a':
        return Number(planet[columm]) === number;
      default:
        return planet;
      }
    };
    /* const filtrar = planets.filter((planet) => quantidade(planet));
    setPlanetsFiltered(filtrar); */
  }, []);
}

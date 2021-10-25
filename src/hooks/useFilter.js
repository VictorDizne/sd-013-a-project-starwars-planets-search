import { useContext } from 'react';
import MyContext from '../context/MyContext';
import usePlanets from './usePlanets';

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function useFilters() {
  const { numFilters, setPlanets } = useContext(MyContext);
  const { comparison, column, value } = numFilters;
  const { planets } = usePlanets();

  const handleFilter = () => {
    let filteredPlanets;

    switch (comparison) {
    case 'maior que':
      filteredPlanets = (
        planets.filter((planet) => Number(planet[column]) > Number(value)));
      return setPlanets(filteredPlanets);
    case 'menor que':
      filteredPlanets = (
        planets.filter((planet) => Number(planet[column]) < Number(value)));
      return setPlanets(filteredPlanets);
    case 'igual a':
      filteredPlanets = (
        planets.filter((planet) => Number(planet[column]) === Number(value)));
      return setPlanets(filteredPlanets);
    default:
      return filteredPlanets;
    }
  };

  return [handleFilter];
}

export default useFilters;

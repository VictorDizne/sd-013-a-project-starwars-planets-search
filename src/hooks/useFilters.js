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
      filteredPlanets = planets.filter((planet) => (
        Number(planet[column]) > value
      ));
      setPlanets(filteredPlanets);
      break;
    case 'menor que':
      filteredPlanets = planets.filter((planet) => (
        Number(planet[column]) < value
      ));
      setPlanets(filteredPlanets);
      break;
    case 'igual a':
      filteredPlanets = planets.filter((planet) => (
        Number(planet[column]) === value
      ));
      setPlanets(filteredPlanets);
      break;
    default:
      return filteredPlanets;
    }
  };

  return [handleFilter];
}

export default useFilters;

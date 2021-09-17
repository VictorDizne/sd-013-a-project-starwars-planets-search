import { useContext } from 'react';
import MyContext from '../context/MyContext';
import usePlanets from './usePlanets';

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function useFilters() {
  const { numFilters } = useContext(MyContext);
  const { planets } = usePlanets();

  const handleFilter = () => {
    let filteredPlanets = planets;

    numFilters.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        filteredPlanets = filteredPlanets.filter((planet) => (
          parseInt(planet[filter.column], 10) > parseInt(planet[filter.value], 10)
        ));
        break;
      case 'menor que':
        filteredPlanets = filteredPlanets.filter((planet) => (
          parseInt(planet[filter.column], 10) < parseInt(planet[filter.value], 10)
        ));
        break;
      case 'igual a':
        filteredPlanets = filteredPlanets.filter((planet) => (
          parseInt(planet[filter.column], 10) === parseInt(planet[filter.value], 10)
        ));
        break;
      default:
        return filteredPlanets;
      }
    });
  };

  return handleFilter;
}

export default useFilters;

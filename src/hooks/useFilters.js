import { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import usePlanets from './usePlanets';

const useFilters = () => {
  const { numFilters, setPlanets } = useContext(planetsContext);
  const { column, comparison, value } = numFilters;
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
      return setPlanets(filteredPlanets);
    }
  };
  return [handleFilter];
};

export default useFilters;

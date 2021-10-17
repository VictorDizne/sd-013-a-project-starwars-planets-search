import { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import usePlanets from './usePlanets';

const useColumnFilter = () => {
  const { sortValues, setPlanets } = useContext(planetsContext);
  const { column, sort } = sortValues;
  const { planets } = usePlanets();

  const handleSort = () => {
    let sortColumns;
    switch (sort) {
    case 'ASC':
      sortColumns = (
        planets.sort((planet1, planetx) => planet1[column].value - planetx[column].value)
      );
      return setPlanets(sortColumns);
    case 'DESC':
      sortColumns = (
        planets.sort((planet1, planetx) => planetx[column].value - planet1[column].value)
      );
      return setPlanets(sortColumns);
    default:
      return setPlanets(sortColumns);
    }
  };
  return [handleSort];
};

export default useColumnFilter;

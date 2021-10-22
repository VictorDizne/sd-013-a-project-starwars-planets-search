import { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import usePlanets from './usePlanets';

const useColumnFilter = () => {
  const { setPlanets } = useContext(planetsContext);
  const { planets } = usePlanets();

  const handleSort = (sort, column) => {
    let sortColumns = [];
    const NEGATIVE = -1;
    switch (sort) {
    case 'ASC':
      sortColumns = (
        planets.sort((a, b) => {
          if (a[column] > b[column]) {
            return 1;
          }
          if (a[column] < b[column]) {
            return NEGATIVE;
          }
          return 0;
        })
      );
      return setPlanets(sortColumns);
    case 'DESC':
      sortColumns = (
        planets.sort((a, b) => b[column] - a[column])
      );
      console.log(sortColumns, '25');
      return setPlanets(sortColumns);
    default:
      return setPlanets(sortColumns);
    }
  };
  return [handleSort];
};

export default useColumnFilter;

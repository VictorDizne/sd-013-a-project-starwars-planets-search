// import { useContext } from 'react';
// import PlanetContext from '../contexts/PlanetContext';

function usePlanetFilters() {
  // const { planetData, setPlanetData } = useContext(PlanetContext);

  const filterByNumericValue = (data, objContext) => {
    const { filterByNumericValues: filterList } = objContext.filters;
    if (filterList.length === 0) return data;
    const { value, column, comparison } = filterList[filterList.length - 1];
    switch (comparison) {
    case 'maior que':
      return Number(data[column]) > Number(value);
    case 'menor que':
      return Number(data[column]) < Number(value);
    case 'igual a':
      return Number(data[column]) === Number(value);
    default:
      return data;
    }
  };

  return { filterByNumericValue };
}

export default usePlanetFilters;

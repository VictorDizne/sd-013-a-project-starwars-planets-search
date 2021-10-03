import { useContext } from 'react';
import PlanetContext from '../contexts/PlanetContext';

function usePlanetFilters() {
  const { planetData, setPlanetData } = useContext(PlanetContext);

  const filterByNumericValue = (planet, planetObject) => {
    const { filterByNumericValues: filterList } = planetObject.filters;
    if (filterList.length === 0) return planet;
    const { value, column, comparison } = filterList[filterList.length - 1];
    switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return planet;
    }
  };

  const setPlanetsByNumericValues = (filtersObject) => {
    console.log('entrou', planetData);
    setPlanetData({ ...planetData,
      filters: { ...planetData.filters,
        filterByNumericValues: [
          ...planetData.filters.filterByNumericValues,
          filtersObject,
        ],
      },
    });
  };

  const delFilterByNumericValues = (column) => {
    setPlanetData({ ...planetData,
      filters: { ...planetData.filters,
        filterByNumericValues: [
          ...planetData.filters.filterByNumericValues.filter(
            (filter) => filter.column !== column,
          ),
        ],
      },
    });
  };

  return { filterByNumericValue, setPlanetsByNumericValues, delFilterByNumericValues };
}

export default usePlanetFilters;

// React
import { useContext } from 'react';

// Context
import { Planets } from '../Planets';

const usePlanets = () => {
  const {
    data,
    filters,
    setFilters,
    applyCompareFilter,
    options,
  } = useContext(Planets);

  return {
    data,
    filters,
    setFilters,
    applyCompareFilter,
    options,
  };
};

export default usePlanets;

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
  } = useContext(Planets);

  return {
    data,
    filters,
    setFilters,
    applyCompareFilter,
  };
};

export default usePlanets;

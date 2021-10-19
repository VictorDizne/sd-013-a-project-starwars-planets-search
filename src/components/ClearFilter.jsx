import React from 'react';
import { usePlanets } from './PlanetsContext';

const ClearFilter = () => {
  const { data, column, setColumn, columnAux, setPlanetsArray } = usePlanets();
  const handleClear = () => {
    setColumn('population');
    setPlanetsArray(data.results);
  };

  return (
    columnAux.includes(column)
      ? <div data-testid="filter">
        {column}
        <button
          type="button"
          onClick={ () => handleClear() }
        >
          X
        </button>
        </div>
      : null
  );
};

export default ClearFilter;

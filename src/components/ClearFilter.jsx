import React from 'react';
import { usePlanets } from './PlanetsContext';

const ClearFilter = () => {
  const { data, setColumn, columnAux, setPlanetsArray } = usePlanets();
  const handleClear = () => {
    setColumn('population');
    setPlanetsArray(data.results);
  };

  return (
    <div data-testid="filter">
      {columnAux.map((colAux, index) => (
        <div key={ index }>
          <span>{colAux}</span>
          <button type="button" onClick={ () => handleClear() }>X</button>
        </div>
      ))}
    </div>
  );
};

export default ClearFilter;

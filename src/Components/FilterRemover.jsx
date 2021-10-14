import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function FilterRemover() {
  const { filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(PlanetsContext);

  return (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ index } data-testid="filter">
          <span>{column}</span>
          <span>{ ' ' }</span>
          <span>{comparison}</span>
          <span>{value}</span>
          <button
            type="button"
            // onClick={ () => filterPlanets()}
            onClick={ () => setFilterByNumericValues(filterByNumericValues
              .filter((filtered) => filtered.column !== column)) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilterRemover;

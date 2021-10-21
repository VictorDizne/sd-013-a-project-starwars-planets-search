import React, { useContext } from 'react';
import ContextPlanet from '../contexts/ContextPlanet';

export default function RemoveFilter() {
  const { filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(ContextPlanet);

  return (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ index } data-testid="filter">
          <span>{column}</span>
          <span>{ ' ' }</span>
          <span>{comparison}</span>
          <span>{ ' ' }</span>
          <span>{value}</span>
          <button
            type="button"
            onClick={ () => setFilterByNumericValues(filterByNumericValues
              .filter((cleanFilter) => cleanFilter.column !== column)) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

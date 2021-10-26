import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filters, setFilters } = useContext(Context);
  const { filterByNumericValues } = filters;

  const removeFilter = (filter) => {
    const newFilter = filterByNumericValues
      .filter(({ column }) => column !== filter.column);
    setFilters({
      ...filters,
      filterByNumericValues: newFilter,
    });
  };

  return (
    <ul>
      {filterByNumericValues.map((filter) => (
        <li
          key={ filter.column }
          data-testid="filter"
        >
          {`${filter.column} `}
          {`${filter.comparison} `}
          {`${filter.value}`}
          <button
            type="button"
            onClick={ () => removeFilter(filter) }
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Filters;

// Sources:
// https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/139/
// Repositório da Elaine 13A
// Auxílio do Lima Lima

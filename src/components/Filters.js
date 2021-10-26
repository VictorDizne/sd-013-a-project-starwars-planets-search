import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const { filters, setFilters } = useContext(AppContext);
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

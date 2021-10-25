import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filters, setFilters } = useContext(Context);
  const { filterByNumericValues } = filters;

  const removeFilter = (filter) => {
    const newComparisonFilter = filterByNumericValues
      .filter(({ column }) => column !== filter.column);
    setFilters({
      ...filters,
      filterByNumericValues: newComparisonFilter,
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

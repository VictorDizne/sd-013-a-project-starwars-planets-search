import React, { useContext } from 'react';
import useFilters from '../hooks/useFilters';
import Context from '../context/Context';

function FilterButton() {
  const { filters } = useContext(Context);
  const [setNewFilter] = useFilters();

  const excludeNumericFilter = (column) => {
    const newFilterNumericValue = {
      filters: {
        ...filters.filters,
        filterByNumericValues: filters.filters.filterByNumericValues
          .filter((item) => item.column !== column),
      },
    };
    setNewFilter(newFilterNumericValue);
  };

  const returnFilterButton = (item) => (
    <div data-testid="filter">
      <span>{item.column}</span>
      <button
        onClick={ () => excludeNumericFilter(item.column) }
        type="button"
      >
        x
      </button>
    </div>
  );

  return filters !== undefined
    && filters.filters.filterByNumericValues.map((item) => returnFilterButton(item));
}

export default FilterButton;

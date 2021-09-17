import React from 'react';
import usePlanetsContext from '../../hooks/usePlanetsContext';

function UsedFilters() {
  const {
    setFilterNumeric,
    filterNumeric,
    setColumnsFilter,
    columnsFilter,
  } = usePlanetsContext();

  const removeFilter = (filterColumn) => {
    setColumnsFilter([...columnsFilter, filterColumn]);

    const differentFromClicked = filterNumeric
      .filter((filter) => filter.column !== filterColumn);

    setFilterNumeric(differentFromClicked);
  };

  return (
    <>
      {
        filterNumeric.map((filter) => (
          <div key={ filter.column } data-testid="filter">
            <span>{ filter.column }</span>
            <span>{ filter.comparison }</span>
            <span>{ filter.value }</span>
            <button
              type="button"
              // data-testid="filter"
              onClick={ () => removeFilter(filter.column) }
            >
              X
            </button>
          </div>
        ))
      }
    </>
  );
}

export default UsedFilters;

import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function SelectedFilters() {
  const {
    filter:
    { filters: { filterByNumericValues } },
    handleRemoveFilter } = useContext(TableContext);

  const renderSelectedFilters = () => (
    <>
      {filterByNumericValues
        .map(({ comparison, column, value }) => (
          <div key={ column } data-testid="filter">
            <span>
              {`${column} ${comparison} ${value}`}
            </span>
            <button
              onClick={ () => handleRemoveFilter(column) }
              type="button"
            >
              X
            </button>
          </div>
        ))}
    </>
  );

  return (
    <div>
      {renderSelectedFilters()}
    </div>
  );
}

export default SelectedFilters;

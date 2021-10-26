import React, { useContext } from 'react';
import contextApp from '../../../context/contextApp';

function ApplyFilters() {
  const {
    filters,
    setFilters,
  } = useContext(contextApp);

  const clearFilter = (filter) => {
    const oldNumericFilters = [...filters.filterByNumericValues];
    const newNumericFilters = oldNumericFilters.filter((current) => current !== filter);
    setFilters({
      ...filters,
      filterByNumericValues: newNumericFilters,
    });
  };

  return (
    <div>
      {filters.filterByName.name !== '' && (
        <div>
          <p>{JSON.stringify(filters.filterByName)}</p>
          <button
            data-testid="filter"
            type="button"
            onClick={ () => {
              setFilters({
                ...filters,
                filterByName: {
                  name: '',
                },
              });
            } }
          >
            X
          </button>
        </div>
      )}
      {filters.filterByNumericValues.length !== 0 && (
        <div>
          {filters.filterByNumericValues.map((current, index) => (
            <div key={ index } data-testid="filter">
              <p>{JSON.stringify(current)}</p>
              <button
                type="button"
                onClick={ () => {
                  clearFilter(current);
                } }
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApplyFilters;

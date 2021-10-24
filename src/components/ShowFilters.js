import React, { useContext } from 'react';

import ApiContext from '../context/ApiContext';

function ShowFilters() {
  const {
    filters,
    setFilters,
  } = useContext(ApiContext);

  const removeFilter = (filter) => {
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
                  removeFilter(current);
                } }
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
      {/* <p>{JSON.stringify(filters)}</p> */}
    </div>
  );
}

export default ShowFilters;

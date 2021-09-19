import React, { useContext } from 'react';
import useFilters from '../hooks/useFilters';
import Context from '../context/Context';

function SearchByName() {
  const { filters } = useContext(Context);
  const [setNewFilter] = useFilters();

  const addFilterName = (value) => {
    const newFilterName = {
      filters: {
        ...filters.filters,
        filterByName: {
          name: value,
        },
      },
    };
    setNewFilter(newFilterName);
  };

  return (
    <label htmlFor="search">
      Search:
      <input
        onChange={ ({ target }) => addFilterName(target.value) }
        data-testid="name-filter"
        name="search"
        type="text"
      />
    </label>
  );
}

export default SearchByName;

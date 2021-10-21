import React, { useContext } from 'react';
import useFilter from '../hooks/useFilter';
import Context from '../context/AppContext';

function SearchByName() {
  const { filters } = useContext(Context);
  const [setNewFilter] = useFilter();

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
    <label htmlFor="search-input">
      Search:
      <input
        data-testid="name-filter"
        name="search-input"
        onChange={ ({ target }) => addFilterName(target.value) }
        type="text"
      />
    </label>
  );
}

export default SearchByName;

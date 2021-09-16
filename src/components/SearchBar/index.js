import React from 'react';
import usePlanetsContext from '../../hooks/usePlanetsContext';

function SearchBar() {
  const { filters, setFilters } = usePlanetsContext();

  const handleSearchByName = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  };

  return (
    <input
      onChange={ handleSearchByName }
      type="text"
      name="name"
      // value={ filters }
      id="name"
      data-testid="name-filter"
    />
  );
}

export default SearchBar;

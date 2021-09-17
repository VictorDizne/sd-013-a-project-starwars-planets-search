import React from 'react';
import usePlanetsContext from '../../hooks/usePlanetsContext';

function SearchBar() {
  const { setFilterName } = usePlanetsContext();

  const handleSearchByName = ({ target }) => {
    setFilterName(target.value);
  };

  return (
    <input
      onChange={ handleSearchByName }
      type="text"
      name="name"
      id="name"
      data-testid="name-filter"
    />
  );
}

export default SearchBar;

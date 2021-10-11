import React, { useEffect, useState } from 'react';
import { usePlanets } from './PlanetsContext';

const SearchBar = () => {
  const { setFilter } = usePlanets();
  const [name, setName] = useState('');

  useEffect(() => {
    setFilter({ filters: { filterByName: { name } } });
  }, [name, setFilter]);

  return (
    <form>
      <input
        type="text"
        placeholder="search planet"
        data-testid="name-filter"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
    </form>
  );
};

export default SearchBar;

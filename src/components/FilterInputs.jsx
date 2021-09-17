import React, { useContext } from 'react';
import dataContext from '../context/createContext';

function FilterInputs() {
  const { setFilters } = useContext(dataContext);

  function handleChagerGeral({ target }) {
    const { value, name } = target;
    switch (name) {
    case 'name':
      setFilters({ filterByName: { name: value } });
      break;
    default: break;
    }
  }

  return (
    <div>
      <label htmlFor="name-filter">
        filtrar por:
        <input
          type="text"
          name="name"
          id="name-filter"
          data-testid="name-filter"
          onChange={ handleChagerGeral }
        />
      </label>
    </div>
  );
}

export default FilterInputs;

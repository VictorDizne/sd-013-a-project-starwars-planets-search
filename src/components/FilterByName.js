import React, { useContext } from 'react';
import { Context } from '../context/Provider';

function FilterByName() {
  const { handleSearchByName } = useContext(Context);

  return (
    <label htmlFor="planetName">
      Planet Name
      <input
        name="planetName"
        type="text"
        onChange={ (e) => handleSearchByName(e.target.value) }
        data-testid="name-filter"
      />
    </label>
  );
}

export default FilterByName;

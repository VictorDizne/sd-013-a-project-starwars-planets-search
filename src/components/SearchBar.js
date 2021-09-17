import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBar() {
  const { name, handleChange } = useContext(PlanetContext);

  return (
    <div>
      <form>
        <label htmlFor="name">
          Nome do Planeta
          <input
            id="name"
            data-testid="name-filter"
            name="searchText"
            type="text"
            value={ name }
            onChange={ handleChange }
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;

import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBar() {
  const { inputName, handleName } = useContext(PlanetContext);

  return (
    <div>
      <form>
        <label htmlFor="name">
          Nome do Planeta
          <input
            type="text"
            data-testid="name-filter"
            name="name"
            value={ inputName }
            onChange={ handleName }
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;

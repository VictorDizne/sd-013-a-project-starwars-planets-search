import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBar() {
  const { searchText, handleChange } = useContext(PlanetContext);
  return (
    <div>
      <h1>sou o SearchBar</h1>
      <label htmlFor="searchbar">
        Pesquisa
        <input
          data-testid="name-filter"
          className="searchbar"
          type="text"
          value={ searchText }
          onChange={ handleChange }
        />
      </label>

    </div>

  );
}

export default SearchBar;

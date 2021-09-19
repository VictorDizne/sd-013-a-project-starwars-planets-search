import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchBar() {
  const { name, selectFilter, handleChange } = useContext(PlanetContext);

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

        <label htmlFor="selectFilter">
          Filtros:

          <select
            name="selectFilter"
            id="selectFilter"
            data-testid="column-filter"
            value={ selectFilter }
            onChange={ handleChange }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>

          <select name="selectSize" id="selectSize" data-testid="comparison-filter">
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>

          <input type="number" data-testid="value-filter" />

          <button type="button" data-testid="button-filter">Filtrar</button>
        </label>
      </form>
    </div>
  );
}

export default SearchBar;

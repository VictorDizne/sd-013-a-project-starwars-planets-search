import React, { useContext } from 'react';
import Context from '../context/Context';

function SearchBar() {
  const { filters, setFilters } = useContext(Context);
  const { filterByName: { name } } = filters;

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Procurar
        <input
          id="name-filter"
          data-testid="name-filter"
          placeholder="Planet name"
          value={ name }
          onChange={ handleChange }
        />
      </label>
      <form>
        <select data-testid="column-filter">
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select data-testid="comparison-filter">
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <label htmlFor="population-filter">
          <input
            id="population-filter"
            data-testid="value-filter"
            type="number"
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;

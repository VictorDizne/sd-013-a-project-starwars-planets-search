import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function SearchBar() {
  const { filters, setFilters } = useContext(Context);
  const { filterByName: { name }, filterByNumericValues } = filters;
  const [formFilter, setFormFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const formHandleChange = ({ target: { name: n, value } }) => {
    setFormFilter({ ...formFilter, [n]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, formFilter],
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
      <form onSubmit={ handleSubmit }>
        <select
          data-testid="column-filter"
          name="column"
          value={ formFilter.column }
          onChange={ formHandleChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ formHandleChange }
          value={ formFilter.comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <label htmlFor="population-filter">
          <input
            id="population-filter"
            data-testid="value-filter"
            type="number"
            name="value"
            value={ formFilter.value }
            onChange={ formHandleChange }
          />
        </label>
        <button
          data-testid="button-filter"
          type="submit"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

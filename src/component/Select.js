import React, { useState, useContext } from 'react';
import StarsContext from '../context/StarContext';

function Select() {
  const { setFilters, filters } = useContext(StarsContext);
  const [localFilter, setLocalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  function handleChange(event) {
    setLocalFilter({
      ...localFilter,
      [event.target.name]: event.target.value,
    });
  }

  function changeData() {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, localFilter],
    });
  }

  return (
    <div>
      <select name="column" data-testid="column-filter" onChange={ handleChange }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select name="comparison" data-testid="comparison-filter" onChange={ handleChange }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ changeData }
      >
        Acionar filtro
      </button>
    </div>
  );
}

export default Select;

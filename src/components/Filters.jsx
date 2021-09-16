import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const nameFilter = (setFilters) => {
  const name = document.getElementById('name-filter').value;
  setFilters((state) => ({ ...state, filterByName: { name } }));
};

const numericFilter = (setFilters) => {
  const column = document.getElementById('column').value;
  const comparison = document.getElementById('comparison').value;
  const { value } = document.getElementById('value');

  const newFilter = { column, comparison, value };

  setFilters((state) => ({
    ...state,
    filterByNumericValues: [...state.filterByNumericValues, newFilter],
  }));
};

function Filters() {
  const { setFilters } = useContext(PlanetsContext);
  return (
    <div>
      <input
        type="text"
        id="name-filter"
        data-testid="name-filter"
        placeholder="Name"
        onChange={ () => nameFilter(setFilters) }
      />
      <div>
        <select name="column" id="column" data-testid="column-filter">
          <option value="population">population</option>
          <option value="rotation_period">rotation_period</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select name="comparison" id="comparison" data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" id="value" data-testid="value-filter" placeholder="Value" />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => numericFilter(setFilters) }
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filters;

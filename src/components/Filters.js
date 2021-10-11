import React, { useContext } from 'react';
import PlanetsContext from '../context';

const planetFilter = (e, setFilters) => {
  setFilters((state) => (
    { ...state, filterByName: { name: e.target.value } }
  ));
};

const handleFilters = (setFilters) => {
  const { value } = document.getElementById('value');
  const column = document.getElementById('column').value;
  const comparison = document.getElementById('comparison').value;

  const otherValues = { column, comparison, value };

  setFilters((state) => ({
    ...state,
    filterByOtherFilters: [...state.filterByOtherFilters, otherValues],
  }));
};

const Filters = () => {
  const { filters, setFilters } = useContext(PlanetsContext);

  return (
    <div>
      <label htmlFor="filter">
        Filter by Name:
        <input
          id="filter"
          type="text"
          placeholder="Type planet..."
          data-testid="name-filter"
          value={ filters.filterByName.name }
          onChange={ (e) => planetFilter(e, setFilters) }
        />
      </label>

      <h3>Other Filters:</h3>

      <label htmlFor="column">
        <select
          id="column"
          name="column"
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="comparison">
        <select
          id="comparison"
          name="comparison"
          data-testid="comparison-filter"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>

      <label htmlFor="value">
        Insert a value
        <input
          id="value"
          type="text"
          name="value"
          data-testid="value-filter"
        />
      </label>

      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleFilters(setFilters) }
      >
        Search by Ohters Filters
      </button>
    </div>
  );
};

export default Filters;

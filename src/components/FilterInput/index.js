import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

import './FilterInput.css';

const filterName = (e, setFilters) => {
  e.persist();
  setFilters((state) => (
    { ...state, filterByName: { name: e.target.value } }));
};

const handleFilters = (setFilters) => {
  // dica do gabriel gaspar de pegar os valores usando "Vanilla DOM"
  const { value } = document.getElementById('value');
  const column = document.getElementById('column').value;
  const comparison = document.getElementById('comparison').value;

  const newValues = { column, comparison, value };

  setFilters((state) => ({
    ...state,
    filterByNumericValues: [...state.filterByNumericValues, newValues],
  }));
};

const FilterInput = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  return (
    <div>
      <h2>Choose Filters</h2>
      <label htmlFor="filter">
        Filter by name
        <br />
        <input
          id="filter"
          type="text"
          data-testid="name-filter"
          value={ filters.filterByName.name }
          onChange={ (e) => filterName(e, setFilters) }
        />
      </label>
      <br />
      <h3>Others Filters</h3>
      <div className="filters-box">
        <label htmlFor="column">
          Filter by
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
          Choose an option
          <select
            id="comparison"
            name="comparison"
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
        </label>

        <label htmlFor="value">
          Insert a number to compare
          <input
            data-testid="value-filter"
            id="value"
            name="value"
            type="text"
          />
        </label>

        <button
          data-testid="button-filter"
          type="button"
          className="filter-button"
          onClick={ () => handleFilters(setFilters) }
        >
          Search by filters
        </button>
      </div>
    </div>
  );
};

export default FilterInput;

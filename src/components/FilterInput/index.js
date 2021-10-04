import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

import './FilterInput.css';

const filterName = (e, setFilters) => {
  e.persist();
  setFilters((state) => (
    { ...state, filterByName: { name: e.target.value } }));
};

const deleteFilter = (column, filters, setFilters, setColumnFilter) => {
  const newFilters = filters.filterByNumericValues
    .filter((item) => item.column !== column);

  setFilters((state) => ({ ...state, filterByNumericValues: newFilters }));
  setColumnFilter((state) => [...state, column]);
};

const deleteColumn = (column, setColumnFilter) => {
  setColumnFilter((state) => state.filter((item) => item !== column));
};

const handleFilters = (setFilters, setColumnFilter) => {
  // dica do gabriel gaspar de pegar os valores usando "Vanilla DOM"
  const { value } = document.getElementById('value');
  const column = document.getElementById('column').value;
  const comparison = document.getElementById('comparison').value;
  const newValues = { column, comparison, value };

  setFilters((state) => ({
    ...state,
    filterByNumericValues: [...state.filterByNumericValues, newValues],
  }));

  deleteColumn(column, setColumnFilter);
};

const FilterInput = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [columnFilter, setColumnFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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
      <h3>Others Filters</h3>
      <div className="filters-box">
        <label htmlFor="column">
          Filter by
          <select
            id="column"
            name="column"
            data-testid="column-filter"
          >
            {columnFilter.map((item) => (
              <option key={ item } value={ item }>
                { item }
              </option>
            ))}
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
          onClick={ () => handleFilters(setFilters, setColumnFilter) }
        >
          Search by filters
        </button>
      </div>

      <div>
        { filters.filterByNumericValues.map((item) => (
          <div data-testid="filter" key={ item.column }>
            <p>
              { item.column }
              {' '}
              { item.comparison }
              {' '}
              { item.value }
            </p>

            <button
              type="button"
              className="delete-button"
              onClick={
                () => deleteFilter(item.column, filters, setFilters, setColumnFilter)
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterInput;

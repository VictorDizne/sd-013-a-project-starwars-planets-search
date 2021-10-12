import React, { useContext, useState } from 'react';
import PlanetsContext from '../context';

const planetFilter = (e, setFilters) => {
  setFilters((state) => (
    { ...state, filterByName: { name: e.target.value } }
  ));
};

const deleteFilter = (column, filters, setFilters, setColumnFilter) => {
  const newFilters = filters.filterByOtherFilters
    .filter((item) => item.column !== column);

  setFilters((state) => ({ ...state, filterByOtherFilters: newFilters }));
  setColumnFilter((state) => [...state, column]);
};

const deleteColumn = (column, setColumnFilter) => {
  setColumnFilter((state) => state.filter((item) => item !== column));
};

const handleFilters = (setFilters, setColumnFilter) => {
  const { value } = document.getElementById('value');
  const column = document.getElementById('column').value;
  const comparison = document.getElementById('comparison').value;

  const otherValues = { column, comparison, value };

  setFilters((state) => ({
    ...state,
    filterByOtherFilters: [...state.filterByOtherFilters, otherValues],
  }));
  deleteColumn(column, setColumnFilter);
};

const Filters = () => {
  const { filters, setFilters } = useContext(PlanetsContext);
  const [columnFilter, setColumnFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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
      <div>
        <label htmlFor="column">
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
          onClick={ () => handleFilters(setFilters, setColumnFilter) }
        >
          Search by Ohters Filters
        </button>
      </div>

      <div>
        {filters.filterByOtherFilters.map((item) => (
          <div data-testid="filter" key={ item.column }>
            <p>
              { item.column }

              { item.comparison}

              { item.value }
            </p>

            <button
              type="button"
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

export default Filters;

// A parte dos filtros contem com a ajuda do Gustavo de Moraes

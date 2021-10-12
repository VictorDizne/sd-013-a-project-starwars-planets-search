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

const columnSort = (option, setFilters) => {
  setFilters((state) => ({
    ...state,
    order: {
      ...state.columnn,
      column: option,
      sort: state.order.sort,
    },
  }));
};

const optionsSort = (option, setFilters) => {
  setFilters((state) => ({
    ...state,
    order: {
      ...state.order,
      sort: option,
    },
  }));
};

const applySort = (filters, data) => {
  const { order } = filters;
  const { column, sort } = order;

  const sorted = data.sort((a, b) => {
    if (sort === 'ASC') {
      return a[column] - b[column];
    }

    return b[column] - a[column];
  });

  return sorted;
};

const Filters = () => {
  const { filters, setFilters, data } = useContext(PlanetsContext);
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

        <div>
          Order by
          <select
            id="order"
            name="order"
            data-testid="column-sort"
            onChange={ (e) => columnSort(e.target.value, setFilters) }
          >
            <option value="name">name</option>
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
          </select>
        </div>

        <label htmlFor="ASC">
          ASC
          <input
            onChange={ (e) => optionsSort(e.target.value, setFilters) }
            data-testid="column-sort-input-asc"
            type="radio"
            name="order"
            value="ASC"
          />
        </label>

        <label htmlFor="DESC">
          DESC
          <input
            onChange={ (e) => optionsSort(e.target.value, setFilters) }
            data-testid="column-sort-input-desc"
            type="radio"
            name="order"
            value="DESC"
          />
        </label>
        <button
          onClick={ () => applySort(filters, data) }
          data-testid="column-sort-button"
          type="button"
          name="sort"
          value="sort"
        >
          Sort
        </button>
      </div>
    </div>
  );
};

export default Filters;

// A parte dos filtros contem com a ajuda do Gustavo de Moraes

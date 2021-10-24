import React, { useContext, useState } from 'react';
import Context from '../context/Context';

// feito com ajuda de Gustavo Moraes, Luiz Casimiro

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

const deleteColumnFilter = (column, setColumnFilter) => {
  setColumnFilter((state) => state.filter((columnItem) => columnItem !== column));
};

const deleteFilter = (column, filters, setFilters, setColumnFilter) => {
  const filtersAfterDelete = filters.filterByNumericValues
    .filter((item) => item.column !== column);

  setFilters((state) => ({ ...state, filterByNumericValues: filtersAfterDelete }));
  setColumnFilter((state) => [...state, column]);
};

const handleChange = (e, setFilters) => {
  e.persist();
  setFilters((state) => ({
    ...state, filterByName: { name: e.target.value },
  }));
};

const handleColumnSort = (option, setFilters) => {
  setFilters((state) => ({
    ...state,
    order: {
      ...state.column,
      column: option,
      sort: state.order.sort,
    },
  }));
};

const handleFilters = (setFilters, setColumnFilter) => {
  const { value } = document.getElementById('value');
  const column = document.getElementById('column').value;
  const comparison = document.getElementById('comparison').value;

  setFilters((state) => ({
    ...state,
    filterByNumericValues: [...state.filterByNumericValues, {
      column, comparison, value,
    }],
  }));

  deleteColumnFilter(column, setColumnFilter);
};

const handleSortOptions = (option, setFilters) => {
  setFilters((state) => ({
    ...state,
    order: {
      ...state.order,
      sort: option,
    },
  }));
};

const Input = () => {
  const { data, filters, setFilters } = useContext(Context);
  const [columnFilter, setColumnFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  return (
    <div>

      <div>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-filter"
            id="name"
            name="name"
            onChange={ (e) => handleChange(e, setFilters) }
            type="text"
            value={ filters.filterByName.name }
          />
        </label>
      </div>

      <div>
        <label htmlFor="column">
          Filtrar por
          <select
            data-testid="column-filter"
            id="column"
            name="column"
          >
            {columnFilter.map((item) => (
              <option key={ item } value={ item }>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="comparison">
          Tipo de comparação
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
      </div>

      <div>
        <label htmlFor="value">
          Número para comparar
          <input
            data-testid="value-filter"
            id="value"
            name="value"
            type="text"
          />
        </label>
      </div>

      <button
        data-testid="button-filter"
        onClick={ () => handleFilters(setFilters, setColumnFilter) }
        type="button"
      >
        Filtrar
      </button>

      <section>
        { filters.filterByNumericValues.map((item) => (
          <div data-testid="filter" key={ item.column }>
            <p>{ item.column }</p>
            <p>{ item.comparison }</p>
            <p>{ item.value }</p>
            <button
              type="button"
              onClick={
                () => deleteFilter(item.column, filters, setFilters, setColumnFilter)
              }
            >
              x
            </button>
          </div>
        ))}

        <section className="order">
          Order by
          <select
            id="order"
            name="order"
            data-testid="column-sort"
            onChange={ (e) => handleColumnSort(e.target.value, setFilters) }
          >
            <option value="name">name</option>
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
          </select>
        </section>

        <label htmlFor="ASC">
          ASC
          <input
            onChange={ (e) => handleSortOptions(e.target.value, setFilters) }
            data-testid="column-sort-input-asc"
            type="radio"
            name="order"
            value="ASC"
          />
        </label>

        <label htmlFor="DESC">
          DESC
          <input
            onChange={ (e) => handleSortOptions(e.target.value, setFilters) }
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
      </section>
    </div>
  );
};

export default Input;

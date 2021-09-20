import React, { useState, useContext } from 'react';
import useFilters from '../hooks/useFilters';
import Context from '../context/Context';

function OrderPlanet() {
  const { filters, titlesTable } = useContext(Context);
  const [orderColumn, setOrderColumn] = useState('');
  const [orderSort, setOrderSort] = useState('');
  const [setNewFilter] = useFilters();

  const addNumericFilter = () => {
    const newFilterNumericValue = {
      filters: {
        ...filters.filters,
        order: {
          column: orderColumn,
          sort: orderSort,
        },
      },
    };
    setNewFilter(newFilterNumericValue);
  };

  return (
    <div style={ { display: 'flex' } }>
      <label htmlFor="crescente">
        crescente
        <input
          onChange={ ({ target }) => setOrderSort(target.value) }
          data-testid="column-sort-input-asc"
          id="crescente"
          name="order"
          type="radio"
          value="ASC"
        />
      </label>
      <label htmlFor="decrescente">
        decrescente
        <input
          onChange={ ({ target }) => setOrderSort(target.value) }
          data-testid="column-sort-input-desc"
          id="decrescente"
          name="order"
          type="radio"
          value="DESC"
        />
      </label>
      <select
        onChange={ ({ target }) => setOrderColumn(target.value) }
        data-testid="column-sort"
      >
        { titlesTable.map((item, index) => <option key={ index }>{item}</option>) }
      </select>
      <button
        onClick={ () => addNumericFilter() }
        type="button"
        data-testid="column-sort-button"
      >
        odernar
      </button>
    </div>
  );
}

export default OrderPlanet;

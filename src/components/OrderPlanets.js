import React, { useState, useContext } from 'react';
import useFilter from '../hooks/useFilter';
import Context from '../context/AppContext';

function OrderPlanets() {
  const { filters, titlesContentTable } = useContext(Context);
  const [orderColumn, setOrderColumn] = useState('');
  const [orderSort, setOrderSort] = useState('');
  const [setNewFilter] = useFilter();

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
    <div>
      <label style={ { marginRight: '8px' } } htmlFor="crescente">
        crescente
        <input
          data-testid="column-sort-input-asc"
          id="crescente"
          onChange={ ({ target }) => setOrderSort(target.value) }
          name="order"
          type="radio"
          value="ASC"
        />
      </label>
      <label style={ { marginRight: '8px' } } htmlFor="decrescente">
        decrescente
        <input
          data-testid="column-sort-input-desc"
          id="decrescente"
          name="order"
          onChange={ ({ target }) => setOrderSort(target.value) }
          type="radio"
          value="DESC"
        />
      </label>
      <select
        data-testid="column-sort"
        onChange={ ({ target }) => setOrderColumn(target.value) }
        style={ { marginRight: '8px' } }
      >
        { titlesContentTable.map((item, index) => (
          <option key={ index }>{ item }</option>)) }
      </select>
      <button
        data-testid="column-sort-button"
        onClick={ () => addNumericFilter() }
        type="button"
      >
        ordenar
      </button>
    </div>
  );
}

export default OrderPlanets;

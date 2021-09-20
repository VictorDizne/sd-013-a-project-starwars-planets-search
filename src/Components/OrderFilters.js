import React, { useContext, useState } from 'react';
import starWarsContext from '../Context';

function OrderFilters() {
  const { filters, setFilters } = useContext(starWarsContext);
  const [order, setOrder] = useState({
    order: {
      column: 'name',
      sort: 'ASC',
    } });
  function handleClick({ target: { name, value } }) {
    setOrder({ ...order, [name]: value });
  }
  function handleButton() {
    setFilters({
      ...filters,
      order,
    });
  }
  // Creates column options
  function ShowcolumnOptions() {
    const columnOptions = ['name', 'population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    return columnOptions
      .map((option, index) => <option value={ option } key={ index }>{ option }</option>);
  }
  return (
    <div>
      <label htmlFor="column">
        Choose a column to sort:
        <select data-testid="column-sort" name="column" onChange={ handleClick }>
          { ShowcolumnOptions() }
        </select>
      </label>
      <label htmlFor="ASC">
        <p>ASC</p>
        <input
          type="radio"
          name="sort"
          value="ASC"
          data-testid="column-sort-input-asc"
          onClick={ handleClick }
        />
      </label>
      <label htmlFor="DESC">
        <p>DESC</p>
        <input
          type="radio"
          name="sort"
          value="DESC"
          data-testid="column-sort-input-desc"
          onClick={ handleClick }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleButton }
      >
        Sort
      </button>
    </div>
  );
}

export default OrderFilters;

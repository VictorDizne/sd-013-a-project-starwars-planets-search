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
    // Sets the contextFilter to the component's state
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
    <div className="order-filter">
      <h3>Choose a column to sort:</h3>
      <div className="flex-row">
        <label htmlFor="column">
          <select data-testid="column-sort" name="column" onChange={ handleClick }>
            { ShowcolumnOptions() }
          </select>
        </label>
        <label htmlFor="ASC" className="flex-row">
          <p>ASC</p>
          <input
            type="radio"
            name="sort"
            value="ASC"
            data-testid="column-sort-input-asc"
            onClick={ handleClick }
          />
        </label>
        <label htmlFor="DESC" className="flex-row">
          <p>DESC</p>
          <input
            type="radio"
            name="sort"
            value="DESC"
            data-testid="column-sort-input-desc"
            onClick={ handleClick }
          />
        </label>
      </div>
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

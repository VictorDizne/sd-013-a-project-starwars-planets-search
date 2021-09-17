import React, { useContext, useState } from 'react';
import { FilterContext } from '../context/MainContext';

const orderBy = [
  'name', 'rotation_period', 'orbital_period', 'diameter', 'surface_water', 'population',
];

export default function Order() {
  const { filters, setFilters } = useContext(FilterContext);
  const [order, setOrder] = useState({
    column: '',
    sort: '',
  });

  function handleChange({ target }) {
    setOrder({
      ...order,
      [target.name]: target.value,
    });
  }

  function handleClick() {
    setFilters({
      ...filters,
      order,
    });
  }

  return (
    <div>
      <label htmlFor="column">
        <select name="column" data-testid="column-sort" onChange={ handleChange }>
          {orderBy.map((column) => <option key={ column }>{column}</option>)}
        </select>
      </label>
      <div>
        <label htmlFor="ASC">
          ASC
          <input
            type="radio"
            value="ASC"
            name="sort"
            data-testid="column-sort-input-asc"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            type="radio"
            value="DESC"
            name="sort"
            data-testid="column-sort-input-desc"
            onChange={ handleChange }
          />
        </label>
      </div>
      <button type="button" data-testid="column-sort-button" onClick={ handleClick }>
        sort
      </button>
    </div>
  );
}

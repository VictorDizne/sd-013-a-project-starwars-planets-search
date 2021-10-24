import React, { useState, useContext } from 'react';
import ApiContext from '../context/ApiContext';

function ShowOrdenade() {
  const [column, setColumn] = useState('population');
  const [sort, setSort] = useState('ASC');
  const { filters, setFilters } = useContext(ApiContext);

  const ordenate = () => {
    setFilters({
      ...filters,
      order: {
        column,
        sort,
      },
    });
  };

  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <label htmlFor="asc">
        Ascendente
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          id="asc"
          value="ASC"
          name="sort"
          onChange={ ({ target: { value } }) => setSort(value) }
        />
      </label>
      <label htmlFor="desc">
        Descendente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          id="desc"
          value="DESC"
          name="sort"
          onChange={ ({ target: { value } }) => setSort(value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ ordenate }
      >
        Ordenar
      </button>
    </div>
  );
}

export default ShowOrdenade;

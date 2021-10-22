import React, { useContext, useState } from 'react';
import { DataContext, FilterContext } from '../context/MyContext';

export default function NumericSearch() {
  const [filterObject, setFilterObject] = useState({});
  const { isReady } = useContext(DataContext);
  const { filters, setFilters, columns, removeColumn } = useContext(FilterContext);

  function handleFilter() {
    setFilters(() => {
      removeColumn([
        ...filters.filterByNumericValues,
        filterObject,
      ]);
      return {
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          filterObject,
        ],
      };
    });
  }

  function handleChange({ target: { value, name } }) {
    setFilterObject({
      ...filterObject,
      [name]: value,
    });
  }

  return (
    <div>
      <label htmlFor="column">
        <select name="column" data-testid="column-filter" onChange={ handleChange }>
          {isReady && columns
            .map((column, index) => <option key={ index }>{column}</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ handleChange }
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ handleFilter }>
        Filtrar
      </button>
    </div>
  );
}

//  Componente criado para resolução do requisito 3 junto com o component NamePlanet

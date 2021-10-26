// Ordenar as colunas de forma ascendente ou descendente
import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

export default function FilterOrder() {
  const { data, setData } = useContext(MyContext);

  const [orderSort, setOrderSort] = useState({
    column: 'Name',
    order: 'ASC',
  });

  const colunas = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function handleChange({ target: { value } }) {
    setOrderSort({
      ...orderSort,
      column: value,
    });
  }

  function ascOrDesc({ target: { value } }) {
    setOrderSort({
      ...orderSort,
      order: value,
    });
  }

  function clickOrder() {
    const { order, column } = orderSort;
    const sub = -1;
    const filter = [...data];

    // condição
    if (order === 'ASC') {
      filter.sort((a, b) => (a[column] > b[column] ? 1 : sub))
        .sort((a, b) => a[column] - b[column]);
    }
    if (order === 'DESC') {
      filter.sort((a, b) => (a[column] < b[column] ? 1 : sub))
        .sort((a, b) => b[column] - a[column]);
    }

    setData(filter);
  }

  return (
    <div>
      SortPlanetas
      <select onChange={ handleChange }>
        {colunas.map((item, index) => <option key={ index }>{ item }</option>)}
      </select>

      ASC
      <input
        value="ASC"
        type="radio"
        onChange={ ascOrDesc }
        data-testid="column-sort-input-asc"
      />

      DESC
      <input
        value="DESC"
        type="radio"
        onChange={ ascOrDesc }
        data-testid="column-sort-input-desc"
      />

      <button
        type="button"
        onClick={ clickOrder }
        data-testid="column-sort-button"
      >
        order
      </button>
    </div>
  );
}

// Ordenar as colunas de forma ascendente ou descendente
import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

export default function FilterOrder() {
  const { data, setData } = useContext(MyContext);

  const [order, setOrder] = useState({
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
    setOrder({
      ...order,
      column: value,
    });
  }

  return (
    <div>
      SortPlanetas
      <select onChange={ handleChange }>
        {colunas}
      </select>

      ASC
      <input
        value="ASC"
        type="radio"
        onChange={ asc }
        data-testid="column-sort-input-asc"
      />

      DESC
      <input
        value="DESC"
        type="radio"
        onChange={ DESC }
        data-testid="column-sort-input-desc"
      />

      <button
        type="button"
        onClick={ b }
        data-testid="column-sort-button"
      >
        order
      </button>
    </div>
  );
}

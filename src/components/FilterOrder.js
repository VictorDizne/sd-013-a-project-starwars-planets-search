// Ordenar as colunas de forma ascendente ou descendente
import React from 'react';

export default function FilterOrder() {
  const colunas = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
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

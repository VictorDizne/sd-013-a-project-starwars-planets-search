// React
import React from 'react';

// Hooks
import usePlanets from '../context/hooks/usePlanets';

const NumericInputs = () => {
  const { filters, setFilters, applyCompareFilter } = usePlanets();

  const handleChange = ({ target }) => {
    const { id, value } = target;

    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          [id]: value,
        },
      ],
    });
  };

  return (
    <>
      {/* Propriedade numérica a ser comparada */}
      <select
        id="column"
        data-testid="column-filter"
        onChange={ (evt) => handleChange(evt) }
      >
        <option name="col" value="population">population</option>
        <option name="col" value="orbital_period">orbital_period</option>
        <option name="col" value="diameter">diameter</option>
        <option name="col" value="rotation_period">rotation_period</option>
        <option name="col" value="surface_water">surface_water</option>
      </select>
      {/* Operador de comparação */}
      <select
        id="comparison"
        data-testid="comparison-filter"
        onChange={ (evt) => handleChange(evt) }
      >
        <option name="compare" value="maior que">maior que</option>
        <option name="compare" value="menor que">menor que</option>
        <option name="compare" value="igual a">igual a</option>
      </select>
      {/* Valor numérico */}
      <input
        type="number"
        name="value"
        id="value"
        data-testid="value-filter"
        min="0"
        onChange={ (evt) => handleChange(evt) }
      />
      {/* Adicionar filtro de comparação */}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => applyCompareFilter() }
      >
        Add Filter
      </button>
    </>
  );
};
export default NumericInputs;

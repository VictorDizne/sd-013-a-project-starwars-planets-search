// React
import React, { useState } from 'react';

// Hooks
import usePlanets from '../context/hooks/usePlanets';

const NumericInputs = () => {
  const {
    filters,
    setFilters,
    applyCompareFilter,
    options,
  } = usePlanets();

  const defaultFilter = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };

  const [filter, setFilter] = useState(defaultFilter);
  console.log(filters);

  /* Criar um novo objeto de filtro */
  const handleChange = ({ target: { id, value } }) => {
    setFilter({
      ...filter,
      [id]: value,
    });
  };

  /* Salvar novo objeto de filtro em filters */
  const handleClick = () => {
    const isEmpty = (obj) => Object.keys(obj).length === 0;

    // Push new object into the filters array
    setFilters({
      ...filters, // Other filters
      filterByNumericValues: [
        ...filters.filterByNumericValues, // My previous filter objects
        isEmpty(filter) ? defaultFilter : filter, // My current filter object
      ],
    });

    // Apply the new filter
    applyCompareFilter();
  };

  return (
    <>
      {/* Propriedade numérica a ser comparada */}
      <select
        id="column"
        data-testid="column-filter"
        defaultValue="population"
        onChange={ (evt) => handleChange(evt) }
      >
        {
          options.map(({ value }, i) => (
            <option name="col" value={ value } key={ i }>{ value }</option>
          ))
        }
      </select>
      {/* Operador de comparação */}
      <select
        id="comparison"
        data-testid="comparison-filter"
        defaultValue="maior que"
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
        defaultValue="0"
        onChange={ (evt) => handleChange(evt) }
      />
      {/* Adicionar filtro de comparação */}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Add Filter
      </button>
    </>
  );
};

export default NumericInputs;

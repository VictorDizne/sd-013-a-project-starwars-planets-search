// Req 3 - Criar um Filtro para valores numéricos.
import React, { useContext, useState } from 'react';
import ContextPlanet from '../contexts/ContextPlanet';

export default function FilterNumeric() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    order,
    setOrder,
    columnOrder,
    setColumnOrder,
    setOrdering,
    planetKeys,
  } = useContext(ContextPlanet);

  const firstFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const secondFilter = [
    'maior que',
    'menor que',
    'igual a',
  ];
  const [stateFilter, setStateFilter] = useState(firstFilter);
  const [col, setCol] = useState('population');
  const [compare, setCompare] = useState('maior que');
  const [numValue, setNumValue] = useState(0);

  function handleClick() {
    const filterColumn = document.getElementById('id-column-filter');
    const filterOption = filterColumn.options[filterColumn.selectedIndex].value;
    const noRepeatFilter = firstFilter.filter((option) => option !== filterOption);
    setStateFilter(noRepeatFilter);
    setFilterByNumericValues([
      ...filterByNumericValues,
      {
        column: col,
        comparison: compare,
        value: numValue,
      }]);
  }

  return (
    <form>
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          value={ col }
          id="id-column-filter"
          onChange={ ({ target }) => setCol(target.value) }
        >
          {/* Gerar o option dinamicamente */}
          {
            stateFilter.map((column) => <option key={ column }>{ column }</option>)
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          value={ compare }
          id="id-comparison-filter"
          onChange={ ({ target }) => setCompare(target.value) }
        >
          {/* Gerar o option dinamicamente */}
          {
            secondFilter.map((value) => <option key={ value }>{ value }</option>)
          }
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        value={ numValue }
        id="id-value-filter"
        onChange={ ({ target }) => setNumValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Adicionar Filtro
      </button>
      <select
        data-testid="column-sort"
        onChange={ ({ target }) => setColumnOrder(target.value) }
      >
        {planetKeys.map((colunm) => (
          <option key={ colunm }>{colunm}</option>
        ))}
      </select>
      <label htmlFor="asc">
        ASCENDENTE
        <input
          type="radio"
          id="asc"
          name="asc-desc"
          value="ASC"
          data-testid="column-sort-input-asc"
          onClick={ ({ target }) => setOrder(target.value) }
        />
      </label>
      <label htmlFor="desc">
        DESCENDENTE
        <input
          type="radio"
          id="desc"
          name="asc-desc"
          value="DESC"
          data-testid="column-sort-input-desc"
          onClick={ ({ target }) => setOrder(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => {
          setOrdering({
            colunm: columnOrder,
            sort: order,
          });
        } }
      >
        Ordenar
      </button>
    </form>
  );
}

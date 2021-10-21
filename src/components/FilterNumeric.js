// Req 3 - Criar um Filtro para valores numéricos.
import React, { useContext, useState } from 'react';
import ContextPlanet from '../contexts/ContextPlanet';

export default function FilterNumeric() {
  const {
    // numericFilter,
    filterByNumericValues,
    setFilterByNumericValues } = useContext(ContextPlanet);

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
  // Estado inicial para o filterByNumericValues
  const [col, setCol] = useState('population');
  const [compare, setCompare] = useState('maior que');
  const [numValue, setNumValue] = useState(0);

  function handleClick() {
    const filterColumn = document.getElementById('id-column-filter');
    // setCol(filterColumn.value);
    // const filtercomparison = document.getElementById('id-comparison-filter');
    // setCompare(filtercomparison.value);
    // const filterInput = document.getElementById('id-value-filter').value;
    // setNumValue(filterInput);
    const filterOption = filterColumn.options[filterColumn.selectedIndex].value;
    // const comparisonFilt = filtercomparison.options[filtercomparison.selectedIndex].value;
    // numericFilter(filterInput, filterOption, comparisonFilt); testando com os valores col compare ...
    const noRepeatFilter = firstFilter.filter((option) => option !== filterOption);
    setStateFilter(noRepeatFilter);
    console.log(noRepeatFilter);
    setFilterByNumericValues([
      ...filterByNumericValues,
      {
        column: col,
        comparison: compare,
        value: numValue,
      }]);
    // numericFilter(numValue, col, compare);
  }

  return (
    <form>
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
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
    </form>
  );
}

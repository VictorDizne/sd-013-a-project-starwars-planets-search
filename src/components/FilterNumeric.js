// Req 3 - Criar um Filtro para valores numéricos.
import React, { useContext, useState } from 'react';
import ContextPlanet from '../contexts/ContextPlanet';

export default function FilterNumeric() {
  const { numericFilter } = useContext(ContextPlanet);

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

  function handleClick() {
    const filterColumn = document.getElementById('id-column-filter');
    const filtercomparison = document.getElementById('id-comparison-filter');
    const filterInput = document.getElementById('id-value-filter').value;
    const filterOption = filterColumn.options[filterColumn.selectedIndex].value;
    const comparison = filtercomparison.options[filtercomparison.selectedIndex].value;
    numericFilter(filterInput, filterOption, comparison);
    const noRepeatFilter = firstFilter.filter((option) => option !== filterOption);
    setStateFilter(noRepeatFilter);
  }

  return (
    <form>
      <label htmlFor="column-filter">
        <select data-testid="column-filter" id="id-column-filter">
          {/* Gerar o option dinamicamente */}
          {
            stateFilter.map((column) => <option key={ column }>{ column }</option>)
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select data-testid="comparison-filter" id="id-comparison-filter">
          {/* Gerar o option dinamicamente */}
          {
            secondFilter.map((value) => <option key={ value }>{ value }</option>)
          }
        </select>
      </label>
      <input type="number" data-testid="value-filter" id="id-value-filter" />
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

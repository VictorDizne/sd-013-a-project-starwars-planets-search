import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const { values } = useContext(MyContext);

  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisonFilter = [
    'maior que',
    'menor que',
    'igual a',
  ];
  const [stateColumns, setStateColumn] = useState(columnFilter);

  function handleClick() {
    const column = document.getElementById('column-filter-id');
    const comparison = document.getElementById('comparison-filter-id');
    const input = document.getElementById('value-filter-id').value;
    const optionColumn = column.options[column.selectedIndex].value;
    const optionComparison = comparison.options[comparison.selectedIndex].value;
    values(input, optionColumn, optionComparison);
    const unusedOptions = columnFilter.filter((arrColumn) => arrColumn !== optionColumn);
    setStateColumn(unusedOptions);
  }

  return (
    <form>
      <label htmlFor="column-filter">
        <select data-testid="column-filter" id="column-filter-id">
          {
            stateColumns.map((column) => (
              <option key={ column }>{column}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select data-testid="comparison-filter" id="comparison-filter-id">
          {
            comparisonFilter.map((comparison) => (
              <option key={ comparison }>{comparison}</option>
            ))
          }
        </select>
      </label>
      <input type="number" data-testid="value-filter" id="value-filter-id" />
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

export default Header;

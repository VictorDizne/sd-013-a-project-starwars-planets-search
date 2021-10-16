// Requisitos 2 - 4 feitos com a ajuda da pessoa estudante Wesley Maia.
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

  const [stateFilter, setStateFilter] = useState(
    { filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: 0,
      },
    ] },
  );
  const [stateColumns, setStateColumn] = useState(columnFilter);

  function handleClick() {
    const column = document.getElementById('column-filter-id');
    const comparison = document.getElementById('comparison-filter-id');
    const input = document.getElementById('value-filter-id').value;
    const optionColumn = column.options[column.selectedIndex].value;
    const optionComparison = comparison.options[comparison.selectedIndex].value;
    values(input, optionColumn, optionComparison);
    // Source: https://stackoverflow.com/questions/60843943/can-we-remove-one-of-selected-option-in-react-select-programmatically
    const unusedOptions = columnFilter.filter((arrColumn) => arrColumn !== optionColumn);
    setStateColumn(unusedOptions);

    const result = {
      value: input,
      column: optionColumn,
      comparison: optionComparison,
    };

    const concat = stateFilter.filterByNumericValues.concat(result);

    setStateFilter({
      filterByNumericValues: concat,
    });
  }

  function clickButtonFilter() {
    const divFilters = document.getElementById('filters');
    return divFilters.remove();
  }

  function displayFilters() {
    return (
      <div>
        {
          stateFilter.filterByNumericValues.map((filter, index) => {
            if (index > 0) {
              return (
                <div key={ index } id="filters">
                  <span>{filter.value}</span>
                  <span>{filter.column}</span>
                  <span>{filter.comparison}</span>
                  <button
                    type="button"
                    data-testid="filter"
                    onClick={ clickButtonFilter }
                  >
                    X
                  </button>
                </div>
              );
            } return false;
          })
        }
      </div>
    );
  }

  return (
    <div>
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
      {displayFilters()}
    </div>
  );
}

export default Header;

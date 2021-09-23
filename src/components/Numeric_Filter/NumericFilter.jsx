import React, { useContext, useState } from 'react';
import PlanetContext from '../../context/PlanetContext';
import { getComparisonSymbol, htmlID } from '../../util';
// import DropDown from './DropDown';

const NUMERIC_COLUMN_OPTIONS = [
  'surface_water',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
];
const COMPARISON_OPTIONS = ['menor que', 'maior que', 'igual a'];

const NumericFilter = () => {
  const [columnOption, setColumnOption] = useState(NUMERIC_COLUMN_OPTIONS[0]);
  const [comparisonOption, setComparisonOption] = useState(COMPARISON_OPTIONS[0]);
  const [inputValue, setInputValue] = useState('0');
  const { filter, setFilter } = useContext(PlanetContext);
  const { filters: { filterByName, filterByNumericValues } } = filter;

  // verifica se um filtro já foi selecionado, cada column só pode ter 1 filtro
  function filterIsAvaible() {
    return filterByNumericValues
      .every(({ column }) => column !== columnOption);
  }

  function addFilter(numericFilter) {
    setFilter({
      ...filter,
      ...{ filters:
        {
          filterByName,
          filterByNumericValues: [...filterByNumericValues, numericFilter],
        },
      },
    });
  }
  function removeFilter(columnToBeRemoved) {
    setFilter({
      ...filter,
      ...{ filters:
        {
          filterByName,
          filterByNumericValues: filterByNumericValues
            .filter(({ column }) => column !== columnToBeRemoved),
        },
      },
    });
  }

  function addFilterOnClick() {
    if (filterIsAvaible()) {
      const newNumericFilter = {
        column: columnOption,
        comparison: comparisonOption,
        value: inputValue,
      };
      addFilter(newNumericFilter);
    }
  }

  function setColumnOnChange({ target: { value } }) {
    setColumnOption(value);
  }
  function setComparisonOnChange({ target: { value } }) {
    setComparisonOption(value);
  }
  function setInputOnChange({ target: { value } }) {
    setInputValue(Number(value) || null);
  }
  function renderActiveNumericFilters() {
    return filterByNumericValues.map(({ column, comparison, value }, index) => (
      <div key={ index } className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn-success" aria-label="Close">
          {`${column} ${getComparisonSymbol(comparison)} ${value}`}
        </button>
        <button type="button" className="btn-close" aria-label="Close" />
      </div>));
  }
  return (
    <div>
      {/* Dropdown: Planet Numeric Column */}
      <select
        data-testid="column-filter"
        name="column"
        onChange={ setColumnOnChange }
        value={ columnOption }
      >
        { NUMERIC_COLUMN_OPTIONS.map((name) => (
          <option key={ htmlID({ name }) } value={ name }>{ name }</option>))}
      </select>
      {/* Dropdown: Comparações */}
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ setComparisonOnChange }
        value={ comparisonOption }
      >
        {COMPARISON_OPTIONS.map((name) => (
          <option key={ htmlID({ name }) } value={ name }>{ name }</option>)) }
      </select>
      {/* Input Value */}
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ setInputOnChange }
        value={ inputValue }
      />
      {/* Botão que gera o Filtro */}
      <button
        data-testid="button-filter"
        type="button"
        className="btn btn-dark"
        onClick={ addFilterOnClick }
      >
        Add Filter
      </button>
      {/* mostra os filtros numéricos na tela */}
      { renderActiveNumericFilters() }
    </div>
  );
};

export default NumericFilter;

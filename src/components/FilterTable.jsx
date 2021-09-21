import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function FilterTable() {
  const columnParam = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const comparisonParam = [
    'maior que',
    'menor que',
    'igual a'];

  const { filterbyNumerics } = useContext(StarWarsContext);

  const [columnFilters, setColumnFilters] = useState(columnParam);

  function handleClik() {
    // Source: https://www.w3schools.com/jsref/prop_select_selectedindex.asp
    const selectColum = document.getElementById('id-column-filter');
    const optionColum = selectColum.options[selectColum.selectedIndex].value;
    // console.log(optionColumns);

    const selectCompare = document.getElementById('id-comparison-filter');
    const optionCompare = selectCompare.options[selectCompare.selectedIndex].value;
    // console.log(optionCompare);

    const optionNumber = document.getElementById('id-value-filter').value;

    filterbyNumerics(optionColum, optionCompare, optionNumber);

    const filterColumn = columnParam.filter((column) => column !== optionColum);

    setColumnFilters(filterColumn);
  }

  return (
    <form>
      <label htmlFor="id-column-filter">
        Column Filter:
        <select data-testid="column-filter" id="id-column-filter">
          {columnFilters.map((column) => (
            <option key={ column } value={ column }>{ column }</option>))}
        </select>
      </label>

      <label htmlFor="id-comparison-filter">
        Comparison Filter:
        <select data-testid="comparison-filter" id="id-comparison-filter">
          {comparisonParam.map((comparison) => (
            <option key={ comparison } value={ comparison }>{ comparison }</option>))}
        </select>
      </label>

      <label htmlFor="id-value-filter">
        Value Filter:
        <input data-testid="value-filter" id="id-value-filter" type="number" />
      </label>

      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleClik() }
      >
        Filtro
      </button>
    </form>
  );
}

export default FilterTable;

import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

const INITIAL_COLUMN = ['population',
  'orbital_period',
  'diameter',
  'rotation_period', 'surface_water'];

function FilterSelector() {
  const [columnSelector, setColumn] = useState(INITIAL_COLUMN);
  const [tempColumn, setTempColumn] = useState('population');
  const [comparisonSelector, setComparison] = useState('maior que');
  const [inputValueSelector, setInputValue] = useState(0);
  const { filters, setFilters } = useContext(PlanetContext);

  function removeFromList() {
    const removeColumn = columnSelector.filter((column) => column !== tempColumn);
    setColumn(removeColumn);
    setTempColumn(columnSelector[1]);
    setInputValue(0);
  }

  function buttonClickFilter() {
    const uploadTemp = { column: tempColumn,
      comparison: comparisonSelector,
      value: Number(inputValueSelector) };
    // console.log(columnSelector, comparisonSelector, inputValueSelector);
    // console.log(uploadTemp);
    // console.log(tempColumn)
    const tempFilters = { ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, uploadTemp] };
    setFilters(tempFilters);
    // console.log((setFilters));
    // filters.filterByNumericValues.push(uploadTemp);
    // console.log(filters.filterByNumericValues);
    // function callBackToProvider(){
    //   filterData();
    // }
    // const removeColumn = tempColumn;
    // console.log(columnSelector);
    removeFromList();
  }

  // console.log(columnSelector);
  return (
    <div>
      <h1>sou o FilterSelector </h1>
      <label htmlFor="column-selector">
        Coluna
        <select
          className="column-selector"
          data-testid="column-filter"
          onChange={ (e) => setTempColumn(e.target.value) }
        >
          {columnSelector.map((column) => (
            <option key={ column } value={ column }>{column}</option>
          ))}

        </select>
      </label>

      <label htmlFor="comparison-selector">
        Comparativo
        <select
          className="comparison-selector"
          data-testid="comparison-filter"
          value={ comparisonSelector }
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value-selector">
        Valor
        <input
          value={ inputValueSelector }
          onChange={ (e) => setInputValue(e.target.value) }
          className="value-selector"
          data-testid="value-filter"
          type="number"
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ buttonClickFilter }
      >
        Botão
      </button>

    </div>

  );
}

export default FilterSelector;

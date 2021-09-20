import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterSelector() {
  const [columnSelector, setColumn] = useState(
    ['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'],
  );
  const [tempColumn, setTempColumn] = useState('population');
  const [comparisonSelector, setComparison] = useState('more-than');
  const [inputValueSelector, setInputValue] = useState(0);
  const { filters, setFilters } = useContext(PlanetContext);

  function buttonClickFilter() {
    const uploadTemp = [columnSelector, comparisonSelector, Number(inputValueSelector)];
    // console.log(columnSelector, comparisonSelector, inputValueSelector);
    // console.log(uploadTemp);
    // console.log(filters.filterByNumericValues);
    // console.log(tempColumn)
    // const tempFilters = filters.filterByNumericValues.push(uploadTemp);
    // setFilters(tempFilters);
    console.log((setFilters));
    filters.filterByNumericValues.push(uploadTemp);
    // const removeColumn = tempColumn;
    console.log(columnSelector);
    const removeColumn = columnSelector.filter((column) => column !== tempColumn);
    setColumn(removeColumn);
    setTempColumn(columnSelector[0]);
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
          <option value="more-than">more-than</option>
          <option value="lesser-than">lesser-than</option>
          <option value="equal-to">equal-to</option>
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

import React, { useContext, useState } from 'react';
import PlanetContext from '../../context/PlanetContext';
import { htmlID } from '../../util';
// import DropDown from './DropDown';

const numColumns = [
  'surface_water',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
];

const comparisonsValues = ['menor que', 'maior que', 'igual a'];
const NumericFilter = () => {
  const [columns, setColumns] = useState(numColumns[0]);
  const [comparisons, setComparisons] = useState(comparisonsValues[0]);
  const [inputValue, setInputValue] = useState('0');
  const { filter, setFilter } = useContext(PlanetContext);
  // console.log('redering NumericFilter');

  function addFilterOnClick() {
    const newNumericFilter = {
      column: columns,
      comparison: comparisons,
      value: inputValue,
    };
    const { filters: { filterByName, filterByNumericValues } } = filter;
    setFilter({
      ...filter,
      ...{ filters: {
        filterByName,
        filterByNumericValues: [...filterByNumericValues, newNumericFilter],
      },
      },
    });
  }
  function setColumnOnChange({ target: { value } }) {
    setColumns(value);
  }
  function setComparisonOnChange({ target: { value } }) {
    setComparisons(value);
  }
  function setInputOnChange({ target: { value } }) {
    setInputValue(Number(value) || null);
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ setColumnOnChange }
        value={ columns }
      >
        {numColumns.map((name) => (
          <option key={ htmlID({ name }) } value={ name }>{ name }</option>)) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ setComparisonOnChange }
        value={ comparisons }
      >
        {comparisonsValues.map((name) => (
          <option key={ htmlID({ name }) } value={ name }>{ name }</option>)) }
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ setInputOnChange }
        value={ inputValue }
      />
      <button
        data-testid="button-filter"
        type="button"
        className="btn btn-dark"
        onClick={ addFilterOnClick }
      >
        Add Filter
      </button>
    </div>
  );
};

export default NumericFilter;

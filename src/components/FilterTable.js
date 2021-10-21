import React, { useContext, useState, useEffect } from 'react';
import context from '../context/context';
import ColumnOrder from './ColumnOrder';

// Falta adicionar referências
const FilterTable = () => {
  const {
    filters: { filterByName: { name, setName }, filterByNumericValues },
    setFilters: { setNumericFilters },
    data,
    arrays: { columns, comparisons },
  } = useContext(context);

  // const [columns] = useState(['population', 'orbital_period', 'diameter',
  //   'rotation_period', 'surface_water']);
  const [columnOptions, setColumnOptions] = useState(columns);
  // const [comparisons] = useState(['maior que', 'menor que', 'igual a']);
  const [comparisonOptions, setComparisonOptions] = useState(comparisons);

  const [column, setColumn] = useState(columnOptions[0]);
  const [comparison, setComparison] = useState(comparisonOptions[0]);
  const [numberValue, setNumberValue] = useState('');

  useEffect(() => {
    setColumn(columnOptions[0]);
    setComparison(comparisonOptions[0]);
    setNumberValue('');
  }, [columnOptions, comparisonOptions, filterByNumericValues]);

  useEffect(() => {
    const newColumns = filterByNumericValues.reduce((acc, curr) => acc
      .filter((col) => col !== curr.column), columns);
    setColumnOptions(newColumns);
    const newComparisons = filterByNumericValues.reduce((acc, curr) => acc
      .filter((compar) => compar !== curr.comparison), comparisons);
    setComparisonOptions(newComparisons);
  }, [columns, comparisons, filterByNumericValues]);

  const newFilter = { column, comparison, numberValue };

  function addNewFilter() {
    setNumericFilters([...filterByNumericValues, newFilter]);
    // updateOptions(newFilter);
    // setColumn('');
    // setComparison('');
    // setNumberValue('');
  }

  return (
    <form>
      <label htmlFor="searchName">
        Name:
        <input
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
          data-testid="name-filter"
        />
      </label>
      <select
        name="columnFilter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
      >
        {columnOptions.map((columnFilter) => (
          <option key={ columnFilter }>{columnFilter}</option>))}
      </select>
      <select
        name="comparisonFilter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        {comparisonOptions.map((comparisonFilter) => (
          <option key={ comparisonFilter }>{comparisonFilter}</option>))}
      </select>
      <input
        type="number"
        value={ numberValue }
        onChange={ ({ target }) => setNumberValue(Number(target.value)) }
        data-testid="value-filter"
        placeholder="Nº"
      />
      <button
        type="button"
        onClick={ () => addNewFilter() }
        data-testid="button-filter"
      >
        Add
      </button>
      {data.length > 0 && <ColumnOrder />}
    </form>
  );
};

export default FilterTable;

import React, { useContext, useState } from 'react';
import context from '../context/context';

const FilterTable = () => {
  const {
    filters: { filterByName: { name, setName }, filterByNumericValues },
    setFilters: { setNumericFilters },
    options: { columnOptions, comparisonOptions, setColumnOptions, setComparisonOptions },
  } = useContext(context);

  const updateOptions = (filter) => {
    const newColumnOptions = columnOptions.filter((option) => option !== filter.column);
    setColumnOptions(newColumnOptions);

    const newComparisonOptions = comparisonOptions
      .filter((option) => option !== filter.comparison);
    setComparisonOptions(newComparisonOptions);
  };

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberValue, setNumberValue] = useState('');

  const newFilter = { column, comparison, numberValue };

  function addNewFilter() {
    setNumericFilters([...filterByNumericValues, newFilter]);
    updateOptions(newFilter);
    setColumn('');
    setComparison('');
    setNumberValue('');
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
    </form>
  );
};

export default FilterTable;

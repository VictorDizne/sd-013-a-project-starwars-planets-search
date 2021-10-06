import React, { useState, useContext } from 'react';
import useFilters from '../hooks/useFilters';
import Context from '../context/Context';

function SearchByNumericValue() {
  const { filters, columnFilter } = useContext(Context);
  const [filterColumn, setFilterColumn] = useState();
  const [filterComparison, setFilterComparison] = useState();
  const [filterValue, setFilterValue] = useState('');
  const [setNewFilter] = useFilters();
  const comparisonFilter = ['maior que', 'menor que', 'igual a'];

  const addNumericFilter = () => {
    const numericValue = {
      column: filterColumn,
      comparison: filterComparison,
      value: filterValue,
    };

    const newFilterNumericValue = {
      filters: {
        ...filters.filters,
        filterByNumericValues: filters.filters.filterByNumericValues.concat(numericValue),
      },
    };
    setNewFilter(newFilterNumericValue);
  };

  return (
    <div style={ { display: 'flex' } }>
      <select
        onChange={ ({ target }) => setFilterColumn(target.value) }
        data-testid="column-filter"
      >
        { columnFilter.map((item, index) => <option key={ index }>{item}</option>) }
      </select>
      <select
        onChange={ ({ target }) => setFilterComparison(target.value) }
        data-testid="comparison-filter"
      >
        { comparisonFilter.map((item, index) => (
          <option
            key={ index }
          >
            {item}
          </option>))}
      </select>
      <input
        onChange={ ({ target }) => setFilterValue(target.value) }
        type="number"
        data-testid="value-filter"
      />
      <button
        onClick={ () => addNumericFilter() }
        type="button"
        data-testid="button-filter"
      >
        filtrar
      </button>
    </div>
  );
}

export default SearchByNumericValue;

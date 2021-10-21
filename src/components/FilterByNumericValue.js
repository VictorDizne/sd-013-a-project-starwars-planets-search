import React, { useState, useContext } from 'react';
import useFilter from '../hooks/useFilter';
import Context from '../context/AppContext';

function SearchByNumericValue() {
  const { filters, columnFilter } = useContext(Context);
  const [filterColumn, setFilterColumn] = useState();
  const [filterComparison, setFilterComparison] = useState();
  const [filterValue, setFilterValue] = useState('');
  const [setNewFilter] = useFilter();
  const operationFilter = ['maior que', 'menor que', 'igual a'];

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
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setFilterColumn(target.value) }
        style={ { marginRight: '8px' } }
      >
        { columnFilter.map((item, index) => <option key={ index }>{item}</option>) }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setFilterComparison(target.value) }
        style={ { marginRight: '8px' } }
      >
        { operationFilter.map((item, index) => (
          <option
            key={ index }
          >
            { item }
          </option>))}
      </select>
      <input
        data-testid="value-filter"
        onChange={ ({ target }) => setFilterValue(target.value) }
        type="number"
      />
      <button
        data-testid="button-filter"
        onClick={ () => addNumericFilter() }
        type="button"
      >
        filtrar
      </button>
    </div>
  );
}

export default SearchByNumericValue;

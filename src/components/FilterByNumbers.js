import React, { useContext, useState } from 'react';
import { Context } from '../context/Provider';

function FilterByNumbers() {
  const { addFilter, columns, setColumns } = useContext(Context);

  const initialState = {
    column: columns[0],
    comparison: 'maior que',
    value: '',
  };
  const [currentFilter, setCurrentFilter] = useState(initialState);

  const handleChange = (target) => {
    const { name, value } = target;

    setCurrentFilter({ ...currentFilter, [name]: value });
  };

  const removeColumnUsedInAFilter = () => {
    const usedColumn = columns.indexOf(currentFilter.column);
    const newColumns = [...columns];
    newColumns.splice(usedColumn, 1);
    setColumns(newColumns);

    // Reset the current filter form
    setCurrentFilter({
      column: newColumns[0],
      comparison: 'maior que',
      value: '',
    });
  };

  const handleClick = () => {
    addFilter(currentFilter);
    removeColumnUsedInAFilter();
  };

  const { column, comparison, value } = currentFilter;

  return (
    <>
      <label htmlFor="column">
        Column
        <select
          name="column"
          value={ column }
          onChange={ ({ target }) => handleChange(target) }
          data-testid="column-filter"
        >
          {columns.map((col) => <option key={ col } value={ col }>{col}</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison
        <select
          name="comparison"
          value={ comparison }
          onChange={ ({ target }) => handleChange(target) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          name="value"
          type="number"
          value={ value }
          onChange={ ({ target }) => handleChange(target) }
          data-testid="value-filter"
        />
      </label>
      <button
        onClick={ handleClick }
        type="button"
        data-testid="button-filter"
      >
        Apply Filter
      </button>
    </>
  );
}

export default FilterByNumbers;

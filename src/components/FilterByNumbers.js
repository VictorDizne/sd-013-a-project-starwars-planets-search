import React, { useContext, useState } from 'react';
import { Context } from '../context/Provider';

function FilterByNumbers() {
  const { handleNewNumericFilter, columns } = useContext(Context);

  const [filter, setFilter] = useState({
    column: columns[0],
    comparison: 'maior que',
    value: '' });

  const handleChange = (target) => {
    const { name, value } = target;

    setFilter({ ...filter, [name]: value });
  };

  const { column, comparison, value } = filter;

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
        onClick={ () => handleNewNumericFilter(filter) }
        type="button"
        data-testid="button-filter"
      >
        Apply Filter
      </button>
    </>
  );
}

export default FilterByNumbers;

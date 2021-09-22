import React, { useContext, useState } from 'react';
import { Context } from '../context/Provider';

const initialColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

function FilterByNumbers() {
  const { handleNewNumericFilter } = useContext(Context);

  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '' });
  const [columns] = useState(initialColumns);

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

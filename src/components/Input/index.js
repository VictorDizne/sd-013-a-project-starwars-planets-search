import React from 'react';
import usePlanetsContext from '../../hooks/usePlanetsContext';

function Input() {
  const { filterNumeric, setFilterNumeric } = usePlanetsContext();
  return (
    <input
      type="number"
      name="value"
      id="value"
      data-testid="value-filter"
      required
      onChange={ ({ target }) => setFilterNumeric({
        ...filterNumeric,
        value: target.value,
      }) }
    />
  );
}

export default Input;

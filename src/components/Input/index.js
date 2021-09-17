import React from 'react';
import PropTypes from 'prop-types';
// import usePlanetsContext from '../../hooks/usePlanetsContext';

function Input({ currentFilter, setCurrentFilter }) {
  // const { filterNumeric, setFilterNumeric } = usePlanetsContext();
  return (
    <input
      type="number"
      name="value"
      id="value"
      data-testid="value-filter"
      required
      onChange={ ({ target }) => setCurrentFilter({
        ...currentFilter,
        value: target.value,
      }) }
    />
  );
}

Input.propTypes = {
  setCurrentFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.shape().isRequired,
};

export default Input;

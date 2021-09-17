import React from 'react';
import PropTypes from 'prop-types';
// import usePlanetsContext from '../../hooks/usePlanetsContext';

function Select({ options, dataTestid, name, currentFilter, setCurrentFilter }) {
  // const { filterNumeric, setFilterNumeric } = usePlanetsContext();
  return (
    <select
      name={ name }
      id={ name }
      data-testid={ dataTestid }
      defaultValue={ options[0] }
      required
      onChange={ ({ target }) => setCurrentFilter({
        ...currentFilter,
        [name]: target.value,
      }) }
    >
      { options.map((option) => (
        <option
          value={ option }
          key={ option }
        >
          { option }
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataTestid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setCurrentFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.shape().isRequired,
};

export default Select;

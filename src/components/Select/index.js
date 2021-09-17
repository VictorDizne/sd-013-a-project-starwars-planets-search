import React from 'react';
import PropTypes from 'prop-types';
import usePlanetsContext from '../../hooks/usePlanetsContext';

function Select({ options, dataTestid, name }) {
  const { filterNumeric, setFilterNumeric } = usePlanetsContext();
  return (
    <select
      name={ name }
      id={ name }
      data-testid={ dataTestid }
      defaultValue={ options[0] }
      required
      onChange={ ({ target }) => setFilterNumeric({
        ...filterNumeric,
        [name]: target.value,
      }) }
    >
      { options.map((option) => (
        <option
          value={ option }
          key={ option }
          // selected={ index === 0 }
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
  // setFilter: PropTypes.func.isRequired,
};

export default Select;

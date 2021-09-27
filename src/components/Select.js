import React from 'react';
import PropTypes from 'prop-types';

function Select({ name, options, test }) {
  return (
    <select id={ name } data-testid={ test }>
      {options ? options.map((option, index) => (
        <option key={ index } value={ option }>{option}</option>
      )) : null}
    </select>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;

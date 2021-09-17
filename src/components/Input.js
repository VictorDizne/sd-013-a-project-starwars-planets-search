import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, onChange, name, test }) {
  return (
    <label htmlFor={ name }>
      {name}
      <input
        type={ type }
        onChange={ onChange }
        id={ name }
        data-testid={ test }
      />
    </label>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;

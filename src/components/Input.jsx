import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, name, testid, onChange, labelText, value, holder, check, click }) {
  return (
    <div>
      <label htmlFor={ name }>
        { labelText }
        <input
          type={ type }
          name={ name }
          data-testid={ testid }
          onChange={ onChange }
          value={ value }
          placeholder={ holder }
          checked={ check }
          onClick={ click }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  holder: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string,
  testid: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Input;

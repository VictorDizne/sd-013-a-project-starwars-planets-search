import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, name, testID, onChange, labelText, value }) {
  return (
    <div>
      <label htmlFor={ name }>
        { labelText }
        <input
          type={ type }
          name={ name }
          data-testid={ testID }
          onChange={ onChange }
          id={ name }
          value={ value }
        />
      </label>
    </div>
  );
}

const { string, func } = PropTypes;

Input.propTypes = {
  type: string,
  name: string,
  testID: string,
  onChange: func,
  labelText: func,
  value: string,
}.isRequired;

export default Input;

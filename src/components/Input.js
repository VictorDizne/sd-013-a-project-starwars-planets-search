import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type, onChange, test, name, labeltext, onClick, value, checked }) {
  return (
    <label htmlFor={ name }>
      {labeltext}
      <input
        type={ type }
        onChange={ onChange }
        data-testid={ test }
        name={ name }
        onClick={ onClick }
        value={ value }
        checked={ checked }
      />
    </label>
  );
}

const { string, func } = PropTypes;

Input.propTypes = {
  type: string,
  test: string,
  name: string,
  onChange: func,
}.isRequired;

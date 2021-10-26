import PropTypes from 'prop-types';
import React from 'react';

export default function Input({ dataId, name, type, onChange }) {
  return (
    <label htmlFor="#">
      <input
        type={ type }
        name={ name }
        onChange={ onChange }
        data-testid={ dataId }
      />
    </label>
  );
}

Input.propTypes = {
  dataId: PropTypes.string,
}.isRequired;

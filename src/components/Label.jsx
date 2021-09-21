import React from 'react';
import PropTypes from 'prop-types';

function Label({ onChange, name, id, type }) {
  return (
    <label htmlFor={ id }>
      filtrar por:
      <input
        type={ type }
        name={ name }
        id={ id }
        data-testid={ id }
        onChange={ onChange }
      />
    </label>);
}

const { string } = PropTypes;

Label.propTypes = {
  name: string,
}.isRequired;

export default Label;

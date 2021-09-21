import React from 'react';
import PropTypes from 'prop-types';

function Option({ text, onChange }) {
  return (
    <option
      name={ text }
      value={ text }
      onChange={ onChange }
    >
      {text}
    </option>);
}

const { string } = PropTypes;

Option.propTypes = {
  name: string,
}.isRequired;

export default Option;

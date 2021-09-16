import React from 'react';
import PropTypes from 'prop-types';

function InputFilter({ onChange }) {
  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ onChange }
    />
  );
}

InputFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputFilter;

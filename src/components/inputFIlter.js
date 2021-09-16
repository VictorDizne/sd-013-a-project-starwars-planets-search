import React from 'react';
import PropTypes from 'prop-types';

function InputFilter({ onChange }) {
  return (
    <label htmlFor="filter">
      Nome do Planeta:
      <input
        data-testid="name-filter"
        id="filter"
        type="text"
        onChange={ onChange }
      />
    </label>
  );
}

InputFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputFilter;

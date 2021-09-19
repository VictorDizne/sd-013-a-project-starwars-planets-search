import React from 'react';
import PropTypes from 'prop-types';

function InputFilter(props) {
  const { onChange } = props;
  return (
    <label htmlFor="input">
      <input
        type="text"
        data-testid="name-filter"
        onChange={ onChange }
      />
    </label>
  );
}

InputFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputFilter;

import React from 'react';
import PropTypes from 'prop-types';

function InputFilter(props) {
  const { onChange } = props;
  return (
    <input
      id="name"
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

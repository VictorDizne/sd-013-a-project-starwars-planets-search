import React from 'react';
import propTypes from 'prop-types';

function Input(props) {
  const { onChange } = props;
  return (
    <label htmlFor="name">
      <input
        name="name"
        data-testid="name-filter"
        onChange={ onChange }
      />
    </label>
  );
}

Input.propTypes = {
  onChange: propTypes.func.isRequired,
};

export default Input;

import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { propsObject } = props;
  const { id, type, name, testId, onChange, data } = propsObject;

  if (type === 'text') {
    return (
      <label htmlFor={ id }>
        { name }
        <input
          id={ id }
          type={ type }
          data-testid={ testId }
          onChange={ onChange }
        />
      </label>
    );
  }

  if (type === 'number') {
    return (
      <label htmlFor={ id }>
        { name }
        <input
          id={ id }
          type={ type }
          data-testid={ testId }
          onChange={ onChange }
        />
      </label>
    );
  }

  return (
    <label htmlFor={ id }>
      { name }
      <select
        id={ id }
        data-testid={ testId }
        onChange={ onChange }
      >
        { data.map((option, index) => (
          <option key={ index } value={ option }>
            { option }
          </option>
        ))}
      </select>
    </label>
  );
};

Input.propTypes = {
  propsObject: PropTypes.shape().isRequired,
};

export default Input;

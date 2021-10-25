import React from 'react';
import PropTypes from 'prop-types';

export default function Select({ options, datatest, labeltext, name, onChange }) {
  return (
    <label htmlFor={ name }>
      {labeltext}
      <select
        name={ name }
        data-testid={ datatest }
        onChange={ onChange }
        id={ name }
      >
        {options && options.map((option, index) => (
          <option key={ index } value={ option }>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

const { string, func } = PropTypes;

Select.propTypes = {
  options: string,
  datatest: string,
  labeltext: string,
  name: string,
  onChange: func,
}.isRequired;

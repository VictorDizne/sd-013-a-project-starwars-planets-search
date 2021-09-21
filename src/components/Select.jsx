import React from 'react';
import PropTypes from 'prop-types';

function Select({ name, onChange, testid, labelText, options }) {
  return (
    <div>
      <label htmlFor={ name }>
        { labelText }
        <select
          name={ name }
          id={ name }
          onChange={ onChange }
          data-testid={ testid }
        >
          {
            options.map((option, index) => (
              <option
                key={ index }
                value={ option }
                id={ option }
              >
                { option }
              </option>
            ))
          }
        </select>
      </label>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  options: PropTypes.array,
  testid: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Select;

import React from 'react';
import PropTypes from 'prop-types';

function Select({ name, labelText, options, onChange, testID }) {
  return (
    <div>
      <label htmlFor={ name }>
        { labelText }
        <select
          name={ name }
          id={ name }
          onChange={ onChange }
          data-testid={ testID }
        >
          {
            options && options.map((option, index) => (
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

const { string, func } = PropTypes;

Select.propTypes = {
  name: string,
  labelText: string,
  id: string,
  onChange: func,
  testID: string,
}.isRequired;

export default Select;

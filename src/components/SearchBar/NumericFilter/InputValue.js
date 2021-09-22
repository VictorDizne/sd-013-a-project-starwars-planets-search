import React, { useContext } from 'react';

import AppContext from '../../../contexts/AppContext';

const InputValue = () => {
  const { numericFilter, setNumericFilter } = useContext(AppContext);

  const handleChange = ({ target }) => {
    setNumericFilter({
      ...numericFilter,
      value: target.value,
    });
  };

  return (
    <input
      data-testid="value-filter"
      type="number"
      id="value-filter"
      onChange={ handleChange }
      required
    />
  );
};

export default InputValue;

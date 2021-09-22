import React, { useContext } from 'react';

import AppContext from '../../../contexts/AppContext';

const SelectComparison = () => {
  const {
    numericFilter,
    setNumericFilter,
  } = useContext(AppContext);

  const handleChange = ({ target }) => {
    setNumericFilter({
      ...numericFilter,
      comparison: target.value,
    });
  };

  const comparisons = ['maior que', 'menor que', 'igual a'];

  const createOptions = (options) => (
    options.map((filter) => (
      <option
        key={ filter }
        value={ filter }
      >
        { filter }
      </option>
    ))
  );

  return (
    <select
      data-testid="comparison-filter"
      name=""
      value={ numericFilter.comparison }
      id="comparison-filter"
      onChange={ handleChange }
    >
      { createOptions(comparisons) }
    </select>
  );
};

export default SelectComparison;

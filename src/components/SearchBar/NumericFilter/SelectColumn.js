import React, { useContext, useEffect } from 'react';

import AppContext from '../../../contexts/AppContext';

const SelectColumn = () => {
  const {
    numericFilter,
    setNumericFilter,
    avaibleFilters,
  } = useContext(AppContext);

  const handleChange = ({ target }) => {
    setNumericFilter({
      ...numericFilter,
      column: target.value,
    });
  };

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

  useEffect(() => {
    const [first] = avaibleFilters;
    setNumericFilter((prevState) => ({
      ...prevState,
      column: first,
    }));
  }, [avaibleFilters, setNumericFilter]);

  return (
    <select
      data-testid="column-filter"
      name=""
      value={ numericFilter.column }
      id="column-filter"
      onChange={ handleChange }
    >
      { createOptions(avaibleFilters) }
    </select>
  );
};

export default SelectColumn;

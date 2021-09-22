import React, { useContext } from 'react';

import AppContext from '../../../contexts/AppContext';

import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';
import FilterButton from './FilterButton';
import InputValue from './InputValue';

const NumericFilter = () => {
  const {
    numericFilter,
    // setNumericFilter,

    avaibleFilters,
    setAvaibleFilters,

    numericFilters,
    setNumericFilters,
  } = useContext(AppContext);

  const handleFilters = () => {
    setNumericFilters([
      ...numericFilters,
      numericFilter,
    ]);

    setAvaibleFilters(avaibleFilters
      .filter((filter) => filter !== numericFilter.column));

    // setNumericFilter({
    //   column: '',
    //   comparison: '',
    //   value: '',
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilters();
    console.log(numericFilter);
    console.log(numericFilters);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <SelectColumn />
      <SelectComparison />
      <InputValue />
      <FilterButton />
    </form>
  );
};

export default NumericFilter;

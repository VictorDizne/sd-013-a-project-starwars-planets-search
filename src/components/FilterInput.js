import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

const FilterInput = () => {
  // const [, makeSearch] = useContext(FilterContext);

  // const filterPlanets = (e) => {
  //   makeSearch(e);
  // };

  return (
    <input
      type="text"
      data-testid="name-filter"
      // onChange={ filterPlanets }
    />
  );
};

export default FilterInput;

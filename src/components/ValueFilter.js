import React, { useContext } from 'react';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';

const ValueFilter = () => {
  const {
    setStates: { getNumericValue },
  } = useContext(PlanetsAndFiltersContext);

  const filterValue = ({ target: { value } }) => {
    getNumericValue(value);
  };

  return (
    <label htmlFor="value-filter">
      Value:
      <input
        type="number"
        name="value-filter"
        id="value-filter"
        data-testid="value-filter"
        onChange={ filterValue }
      />
    </label>
  );
};

export default ValueFilter;

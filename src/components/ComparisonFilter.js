import React, { useContext } from 'react';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';

const ComparisonFilter = () => {
  const {
    setStates: { getComparisonValue },
  } = useContext(PlanetsAndFiltersContext);

  const filterComparison = ({ target: { value } }) => {
    getComparisonValue(value);
  };

  return (
    <label htmlFor="comparison-filter">
      Compare:
      <select
        name="comparison-filter"
        id="comparison-filter"
        data-testid="comparison-filter"
        onChange={ filterComparison }
      >
        <option value="maior que" selected>maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </label>
  );
};

export default ComparisonFilter;

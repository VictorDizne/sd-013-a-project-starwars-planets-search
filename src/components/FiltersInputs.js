import React, { useContext } from 'react';
import NameFilter from './NameFilter';
import ColumnFilter from './ColumnFilter';
import ComparisonFilter from './ComparisonFilter';
import ValueFilter from './ValueFilter';
import FilterButton from './FilterButton';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';

const FiltersInputs = () => {
  const {
    setStates: { setColumn, setComparison, setValue },
    filtersValue: { columnValue, comparisonValue, numericValue },
  } = useContext(PlanetsAndFiltersContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    setColumn(columnValue);
    setComparison(comparisonValue);
    setValue(numericValue);
  };

  return (
    <div>
      <NameFilter />
      <form onSubmit={ handleSubmit }>
        <ColumnFilter />
        <ComparisonFilter />
        <ValueFilter />
        <FilterButton />
      </form>
    </div>
  );
};

export default FiltersInputs;

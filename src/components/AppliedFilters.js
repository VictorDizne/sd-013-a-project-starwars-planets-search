import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

const AppliedFilters = () => {
  const { searchHistory,
    dropdowns: { optionA, optionB },
    setSearchHistory,
    setDropdowns } = useContext(StarWarsContext);

  const handleAppliedFilters = (column, comparison) => {
    setDropdowns({
      optionA: [...optionA, column],
      optionB: [...optionB, comparison],
    });

    setSearchHistory(searchHistory.filter((el) => el.column !== column));
  };

  const Filters = (searchHistory.map(({ column, comparison, value }, i) => (
    <span
      key={ i }
    >
      <h3
        data-testid="filter"
      >
        {`Filter ${i + 1}: ${column} ${comparison} ${value}`}
      </h3>
      <button
        type="button"
        data-testid="filter"
        onClick={ () => handleAppliedFilters(column, comparison) }
      >
        x
      </button>
    </span>
  ))
  );

  return (
    Filters
  );
};

export default AppliedFilters;

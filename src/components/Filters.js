import React, { useContext } from 'react';
import context from '../context/context';

const Filters = () => {
  const {
    filters: { filterByNumericValues },
    setFilters: { setNumericFilters },
  } = useContext(context);

  const deleteFilter = (column) => {
    const filtersUpdated = filterByNumericValues
      .filter((filter) => filter.column !== column);
    setNumericFilters(filtersUpdated);
  };

  if (filterByNumericValues.length > 0) {
    return (
      <>
        {filterByNumericValues.map(({ column, comparison, numberValue }, i) => (
          <div data-testid="filter" key={ i }>
            <span>{`${column} ${comparison} ${numberValue}`}</span>
            <button
              type="button"
              onClick={ () => deleteFilter(column) }
            >
              x
            </button>
          </div>
        ))}
      </>
    );
  }

  return <span />;
};

export default Filters;

import React, { useContext } from 'react';
import context from '../context/context';

const RemoveFilter = () => {
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
        {filterByNumericValues.map(({ column, comparison, numberValue }, index) => (
          <div data-testid="filter" key={ index }>
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

export default RemoveFilter;

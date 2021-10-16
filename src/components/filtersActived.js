import React, { useContext } from 'react';
import appContext from '../context/appcontext';

const FiltersActiveds = () => {
  const {
    allFilters,
    clearFilter,
    // column,
  } = useContext(appContext);

  /* async function handleClick(filter) {
    console.log(allFilters);
    console.log(filter);
    await clearFilter(filter);
  } */
  // filter.column, filter[column]
  if (allFilters.length > 0) {
    return (
      <div>
        {allFilters.map((filter) => (
          <h4 key={ filter.column } data-testid="filter">
            <button
              key={ filter.column }
              type="button"
              onClick={ () => clearFilter(filter.column) }
            >
              X
            </button>
          </h4>
        ))}
      </div>
    );
  } return null;
};

export default FiltersActiveds;

/*
clearFilter(filter.column)
<h4  */

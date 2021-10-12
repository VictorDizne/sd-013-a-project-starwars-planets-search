import React, { useContext } from 'react';
import appContext from '../context/appcontext';

const FiltersActiveds = () => {
  const { allFilters, clearFilter, column } = useContext(appContext);

  async function handleClick(filter) {
    console.log(column);
    await clearFilter(filter);
  }

  return (
    <div>
      <h3> Filtros ativos </h3>
      {allFilters.map((filter) => (
        <div key={ filter.column }>
          <h4>
            {`${filter.column},
            ${filter.comparison},
            ${filter.value}`}
            <button
              type="button"
              data-testid="filter"
              onClick={ () => handleClick(filter[column]) }
            >
              X
            </button>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default FiltersActiveds;

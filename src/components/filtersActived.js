import React, { useContext } from 'react';
import appContext from '../context/appcontext';

const FiltersActiveds = () => {
  const {
    allFilters,
    clearFilter,
  } = useContext(appContext);
  // consultei a logica para refatorar do aluno victor diniz T13 - A  link : https://github.com/tryber/sd-013-a-project-starwars-planets-search/blob/victor-diniz-project-starwars-planets-search/src/components/ActiveFilter.js
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

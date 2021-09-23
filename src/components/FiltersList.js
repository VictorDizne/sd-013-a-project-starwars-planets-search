import React, { useContext } from 'react';
import { Context } from '../context/Provider';

function FiltersList() {
  const {
    removeFilter,
    filters: { filterByNumericValues } } = useContext(Context);

  const handleClick = ({ target }) => {
    removeFilter(target.dataset.column);
  };

  return (
    <ul>
      {filterByNumericValues.map((filter) => (
        <li key={ filter.column } data-testid="filter">
          {`${filter.column} | ${filter.comparison} | ${filter.value} `}
          <button
            type="button"
            data-column={ filter.column }
            onClick={ handleClick }
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FiltersList;

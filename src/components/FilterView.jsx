import React, { useContext } from 'react';
import planetsContext from '../contextAPI';

function FilterView() {
  const {
    filters: { filterByNumericValues },
    functions: { handleClickRemoveFilter },
  } = useContext(planetsContext);

  return (
    <ul>
      {filterByNumericValues
        .map(({ column, comparison, value }) => (
          <li key={ column }>
            {`${column} - ${comparison} - ${value}`}
            <button
              type="button"
              onClick={ () => handleClickRemoveFilter(column) }
            >
              X
            </button>
          </li>
        ))}
    </ul>
  );
}

export default FilterView;

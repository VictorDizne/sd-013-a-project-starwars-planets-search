import React, { useContext } from 'react';
import Context from '../Context/Context';

function Filters() {
  const {
    filters,
    setFilters,
  } = useContext(Context);

  return (
    <div>
      {filters.filterByNumericValues.map((el, index) => (
        <div
          data-testid="filter"
          key={ index }

        >
          <p>{el.column}</p>
          <p>{el.comparison}</p>
          <p>{el.value}</p>
          <button
            type="button"
            onClick={ () => {
              filters.filterByNumericValues.splice(index, 1);
              setFilters({
                ...filters,
                filterByNumericValues: [...filters.filterByNumericValues],
              });
            } }
          >
            X

          </button>
        </div>
      ))}
    </div>
  );
}

export default Filters;

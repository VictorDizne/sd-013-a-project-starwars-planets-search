import React, { useContext } from 'react';
import contextApp from '../context/contextApp';

function RemoveFilter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    filterUsed,
    setFilterUsed,
  } = useContext(contextApp);
  const ArrayFilters = filterByNumericValues;

  console.log(filterByNumericValues);
  console.log(setFilterByNumericValues);
  console.log(filterUsed);
  console.log(setFilterUsed);

  console.log(ArrayFilters);
  return (
    <ul>
      { ArrayFilters.map(({ column, comparison, value }) => (
        <li data-testid="filter" key={ column }>
          {column}
          {' '}
          {comparison}
          {' '}
          {value}
          <button
            type="button"
            onClick={ () => {
              setFilterUsed([filterUsed, column]);
              setFilterByNumericValues(
                filterByNumericValues.filter((num) => (num.column !== column)),
              );
            } }
          >
            X
          </button>
        </li>

      ))}
    </ul>
  );
}

export default RemoveFilter;

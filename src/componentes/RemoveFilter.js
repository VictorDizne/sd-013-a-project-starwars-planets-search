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

  return (
    <ul>
      { ArrayFilters.map((filt) => (
        <li data-testid="filter" key={ filt.column }>
          {filt.column}
          {' '}
          {filt.comparison}
          {' '}
          {filt.value}
          <button
            type="button"
            onClick={ () => {
              setFilterUsed([filterUsed, filt.column]);
              setFilterByNumericValues(
                filterByNumericValues.filter((num) => (num.column !== filt.column)),
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

import React, { useContext } from 'react';
import { FilterContext } from '../context/MyContext';

export default function Filter() {
  const { filters, removeFilter } = useContext(FilterContext);
  const { filterByNumericValues } = filters;

  return (
    <div>
      {filterByNumericValues.map(({ comparison, column, value }, index) => (
        <div data-testid="filter" key={ index }>
          <p>{`${column} ${comparison} ${value}`}</p>
          <button onClick={ () => removeFilter(column) } type="button">X</button>
        </div>
      ))}
    </div>
  );
}

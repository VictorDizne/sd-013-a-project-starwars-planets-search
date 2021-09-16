import React, { useContext } from 'react';
import AppContext from '../helpers/AppContext';

export default function Filters() {
  const {
    filters: { filterByNumericValues },
    sets: { setFilters },
  } = useContext(AppContext);

  const removeFilter = (index) => {
    const removeArray = filterByNumericValues.filter((_, i) => index !== i);
    setFilters(removeArray);
  };

  return (
    <section>
      { filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div data-testid="filter" key={ index }>
          <h4>{ `Column: ${column}` }</h4>
          <h4>{ `Comparison: ${comparison}` }</h4>
          <h4>{ `Value: ${value}` }</h4>
          <button onClick={ () => removeFilter(index) } type="button">x</button>
        </div>
      )) }
    </section>
  );
}

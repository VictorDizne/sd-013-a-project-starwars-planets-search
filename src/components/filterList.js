import React, { useContext } from 'react';
import dataContext from '../context/createContext';

function RenderFilterList() {
  const { filters, setFilters } = useContext(dataContext);
  const { filterByNumericValues } = filters;

  const TOString = (element) => JSON.stringify([
    element.column,
    element.value,
    element.comparison,
  ]);

  const removeFromContext = (selectedValues) => {
    filterByNumericValues
      .find((findValues, index) => (TOString(findValues) === TOString(selectedValues)
        ? filterByNumericValues.splice(index, 1) : null));
    setFilters({ ...filters, filterByNumericValues: [...filters.filterByNumericValues] });
  };

  const generateFilter = () => filterByNumericValues.map((value, idex) => {
    const element = (
      <div data-testid="filter" key={ value }>
        <div>
          <p>
            {`${value.column} ${value.comparison} ${value.value}`}
          </p>
        </div>
        <button type="button" onClick={ () => removeFromContext(value) }>X</button>
      </div>
    );
    return (
      <div key={ idex }>
        {element}
      </div>
    );
  });
  return generateFilter();
}

export default RenderFilterList;

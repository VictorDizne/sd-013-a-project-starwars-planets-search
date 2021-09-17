import React, { useContext } from 'react';
import starWarsContext from '../Context';

function TextSearch() {
  const { filters, setFilters } = useContext(starWarsContext);

  function handleChange({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ handleChange }
    />
  );
}

export default TextSearch;

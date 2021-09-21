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
    <div className="text-search">
      <h3>Filter by name</h3>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
}

export default TextSearch;

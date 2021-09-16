import React, { useContext } from 'react';
import { FilterContext } from '../context/MainContext';

export default function SearchTab() {
  const { filters, setFilters } = useContext(FilterContext);

  function handleChange({ target }) {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  }

  return (
    <div>
      <label htmlFor="name">
        <input
          data-testid="name-filter"
          name="name"
          type="text"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

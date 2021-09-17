import React, { useContext } from 'react';
import { FilterContext } from '../context/MainContext';

export default function NameInput() {
  const { filters, setFilters } = useContext(FilterContext);

  function handleName({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  return (
    <label htmlFor="name">
      <input
        data-testid="name-filter"
        name="name"
        type="text"
        onChange={ handleName }
      />
    </label>
  );
}

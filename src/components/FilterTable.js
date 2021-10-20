import React, { useContext } from 'react';
import context from '../context/context';

const FilterTable = () => {
  const { filters: { filterByName: { name, setName } } } = useContext(context);

  return (
    <label htmlFor="searchName">
      Search by Name:
      <input
        type="text"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
        data-testid="name-filter"
      />
    </label>
  );
};

export default FilterTable;

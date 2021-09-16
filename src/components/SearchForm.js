import React, { useContext } from 'react';
import context from '../context/context';

const SearchForm = () => {
  const { filters: { filterByName: { name, setName } } } = useContext(context);

  return (
    <input
      type="text"
      value={ name }
      onChange={ ({ target }) => setName(target.value) }
      data-testid="name-filter"
    />
  );
};

export default SearchForm;

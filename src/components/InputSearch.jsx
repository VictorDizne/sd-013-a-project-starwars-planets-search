import React, { useContext } from 'react';
import tableContext from '../context';

const InputSearch = () => {
  const { setFilters } = useContext(tableContext);
  return (
    <form action="">
      <label htmlFor="input-search">
        Planetas
        <input
          data-testid="name-filter"
          type="text"
          onChange={ (e) => setFilters({ filterByName: { name: e.target.value } }) }
          id="input-search"
        />
      </label>
    </form>
  );
};

export default InputSearch;

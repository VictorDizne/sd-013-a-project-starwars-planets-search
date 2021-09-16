import React, { useContext } from 'react';
import Context from './mycontext';

const NameFilter = () => {
  const { filters: { filterByName } } = useContext(Context);

  return (
    <label htmlFor="nameFilter">
      Filtre por nome:
      <input
        id="nameFilter"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ (e) => filterByName.changeNameFilter(e.target.value) }
      />
    </label>
  );
};

export default NameFilter;

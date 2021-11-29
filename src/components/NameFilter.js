import React, { useContext } from 'react';
import Context from './mycontext';

const NameFilter = () => {
  const { filters: { filterByName } } = useContext(Context);

  return (
    <label htmlFor="nameFilter" className="input-group mb-3">
      <span className="input-group-text">Filtre por nome:</span>
      <input
        id="nameFilter"
        className="form-control"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ (e) => filterByName.changeNameFilter(e.target.value) }
      />
    </label>
  );
};

export default NameFilter;

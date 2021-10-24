import React, { useContext } from 'react';

import ApiContext from '../context/ApiContext';

function FilterByName() {
  const {
    filters,
    setFilters,
  } = useContext(ApiContext);

  const filter = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        placeholder="Pesquisar por nome"
        value={ filters.filterByName.name }
        onChange={ (event) => filter(event) }
      />
    </div>
  );
}

export default FilterByName;

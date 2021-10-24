import React, { useContext } from 'react';

import ApiContext from '../context/ApiContext';

function FilterByName() {
  const {
    data,
    setFilteredData,
    filters,
    setFilters,
  } = useContext(ApiContext);

  const filter = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
    setFilteredData(data.filter(({ name }) => (
      name.toLowerCase().includes(value)
    )));
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        placeholder="Pesquisar por nome"
        onChange={ (event) => filter(event) }
      />
    </div>
  );
}

export default FilterByName;

import React from 'react';
import NumberFilter from './NumberFilter';
import OrderFilters from './OrderFilters';
import TextSearch from './TextSearch';

function FilterBar() {
  return (
    <>
      <TextSearch />
      <NumberFilter />
      <OrderFilters />
    </>
  );
}

export default FilterBar;

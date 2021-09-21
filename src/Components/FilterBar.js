import React from 'react';
import NumberFilter from './NumberFilter';
import OrderFilters from './OrderFilters';
import TextSearch from './TextSearch';

function FilterBar() {
  return (
    <div className="filter-area">
      <TextSearch />
      <OrderFilters />
      <NumberFilter />
    </div>
  );
}

export default FilterBar;

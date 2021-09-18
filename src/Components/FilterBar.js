import React from 'react';
import NumberFilter from './NumberFilter';
import TextSearch from './TextSearch';

function FilterBar() {
  return (
    <>
      <TextSearch />
      <NumberFilter />
    </>
  );
}

export default FilterBar;

import React from 'react';
import OrderByFilter from './OrderByFilter';
import PlanetSearcher from './PlanetSearcher';
import SearchByNumber from './SearchByNumber';

function FilterBar() {
  return (
    <div>
      <PlanetSearcher />
      <SearchByNumber />
      <OrderByFilter />
    </div>
  );
}

export default FilterBar;

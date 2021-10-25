import React from 'react';
import PlanetSearcher from './PlanetSearcher';
import SearchByNumber from './SearchByNumber';

function FilterBar() {
  return (
    <div>
      <PlanetSearcher />
      <SearchByNumber />
    </div>
  );
}

export default FilterBar;

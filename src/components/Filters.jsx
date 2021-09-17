import React, { useContext } from 'react';
import FilterContext from '../utils/FilterContext';

export default function Filters() {
  const { setFilterByName } = useContext(FilterContext);
  return (
    <div>
      <label htmlFor="planet-name">
        Nome do Planeta
        <input
          type="text"
          name="planet-name"
          id="planet-name"
          data-testid="name-filter"
          onChange={ (event) => setFilterByName(event.target.value) }
        />
      </label>
    </div>
  );
}

import React, { useContext } from 'react';
import contextApp from '../context/contextApp';

function FilterName() {
  const { filterHandle } = useContext(contextApp);

  return (
    <div className="filter-name">
      <label htmlFor="filter-name">
        <input
          type="text"
          id="filter-name"
          placeholder="Filter by name"
          data-testid="name-filter"
          onChange={ (e) => filterHandle(e) }
        />
      </label>
    </div>
  );
}

export default FilterName;

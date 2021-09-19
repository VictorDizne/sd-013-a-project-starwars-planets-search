import React, { useContext } from 'react';
import context from '../context';

// NECESSARY TO CREATE COMPONENTS FOR FILTERS AND RENDERING HERE
function Filters() {
  const { handleChange, filters: { filterByName: { name } } } = useContext(context);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        data-testid="name-filter"
        value={ name }
        onChange={ handleChange }
      />
    </div>
  );
}

export default Filters;

import React, { useContext } from 'react';
import Context from '../context/Context';

function FiltersBar() {
  const { setFilters } = useContext(Context);

  function handleChange({ target: { value } }) {
    setFilters({ filterByName: { name: value } });
  }

  return (
    <div>
      <input type="text" onChange={ handleChange } data-testid="name-filter" />
    </div>
  );
}

export default FiltersBar;

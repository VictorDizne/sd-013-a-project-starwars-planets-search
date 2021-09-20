import React, { useContext } from 'react';
import apiContext from '../contexts/apiContext';

function Filters() {
  const { setFilters, filters } = useContext(apiContext);

  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="busque um planeta"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
}

export default Filters;

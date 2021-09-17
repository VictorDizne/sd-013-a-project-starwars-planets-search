import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

const NameFilter = () => {
  const { setFilters } = useContext(AppContext);

  const handleChange = ({ target }) => {
    setFilters({
      filterByName: { name: target.value },
    });
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      placeholder="Filter by Name"
      onChange={ handleChange }
    />
  );
};

export default NameFilter;

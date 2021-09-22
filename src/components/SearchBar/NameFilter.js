import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

const NameFilter = () => {
  const { filters, setFilters } = useContext(AppContext);

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
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

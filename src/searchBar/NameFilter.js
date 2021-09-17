import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const NameFilter = () => {
  const { setFilters } = useContext(AppContext);

  const handleOnChange = ({ target }) => {
    setFilters({ filterByName: { name: target.value } });
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      placeholder="Filter by name"
      onChange={ handleOnChange }
    />
  );
};
export default NameFilter;

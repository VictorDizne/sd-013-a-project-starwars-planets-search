import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const NameFilter = () => {
  const { filter, setFilter } = useContext(AppContext);
  const handleChange = ({ target }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: target.value,
      },
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

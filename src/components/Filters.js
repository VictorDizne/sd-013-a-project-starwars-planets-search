import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

const Filter = () => {
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const { filterName } = useContext(PlanetContext);

  const handleChangeName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    filterName(filters.filterByName.name);
  };

  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input
          id="name"
          name="name"
          value={ filters.filterByName.name }
          data-testid="name-filter"
          onChange={ handleChangeName }
        />
      </label>
    </form>
  );
};

export default Filter;

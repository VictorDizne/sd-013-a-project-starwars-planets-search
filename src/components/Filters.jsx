import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/Context';

function Filters() {
  const [search, setsearch] = useState('');
  const { setFilters } = useContext(StarWarsContext);
  const handleChange = (input) => {
    const { target: { value } } = input;
    setsearch(value);
    setFilters((prev) => ({
      ...prev,
      filterByName: {
        name: value,
      },
    }));
    return search;
  };

  return (
    <div>
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default Filters;

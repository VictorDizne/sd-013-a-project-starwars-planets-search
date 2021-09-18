import React, { useState, useContext } from 'react';
import StarWarsContext from '../context';

const SearchBarName = () => {
  const [planetName, setPlanetName] = useState('');
  const { filterByName } = useContext(StarWarsContext);

  const handleChange = ({ target: { value } }) => {
    // console.log('handleChange', value);
    filterByName(value);
    setPlanetName(value);
  };

  return (
    <label htmlFor="input-filter-name">
      Filter by name:
      <input
        data-testid="name-filter"
        id=""
        name="input-filter-name"
        onChange={ handleChange }
        type="text"
        value={ planetName }
      />
    </label>
  );
};

export default SearchBarName;

import React, { useContext } from 'react';
import planetContext from '../context';

const SearchBar = () => {
  const { name, handleChange } = useContext(planetContext);

  return (
    <div>
      Busca
      <input
        type="text"
        placeholder="Planets..."
        onChange={ handleChange }
        value={ name }
        data-testid="name-filter"
      />
    </div>
  );
};

export default SearchBar;

import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(MyContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search"
        value={ searchTerm }
        onChange={ handleChange }
      />
      <ul />
    </div>
  );
}

export default SearchBar;

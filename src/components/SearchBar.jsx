import React, { useContext } from 'react';
import Context from '../Context/Context';
import '../App.css';

function SearchBar() {
  const {
    handleName,
  } = useContext(Context);
  const filterForms = () => (
    <form className="App-search-bar">
      <input type="text" data-testid="name-filter" onChange={ handleName } />
    </form>
  );

  return (
    <div>
      {filterForms()}
    </div>
  );
}

export default SearchBar;

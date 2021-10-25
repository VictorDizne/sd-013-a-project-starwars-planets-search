// Sequência de renderização no App.js: 1º
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function InputSearch() {
  const { valueInput, handleChange } = useContext(MyContext);

  return (
    <div>
      <label htmlFor="name-filter">
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
          value={ valueInput }
        />
      </label>
    </div>
  );
}

export default InputSearch;

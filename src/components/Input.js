import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Input() {
  const contextValue = useContext(MyContext);
  const { valueInput, handleChange } = contextValue;

  return (
    <div>
      <input
        type="text"
        value={ valueInput }
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
}

export default Input;

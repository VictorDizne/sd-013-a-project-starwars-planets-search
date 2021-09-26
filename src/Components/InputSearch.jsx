import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

function InputSearch() {
  const { handleChange } = useContext(MyContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="pesquisar"
        onChange={ handleChange }
      />
    </div>
  );
}

export default InputSearch;

// Requiisto 2.
import React, { useContext } from 'react';
import ContextPlanet from '../contexts/ContextPlanet';

function InputFilter() {
  const contextValue = useContext(ContextPlanet);
  const { inputFilterValue, handleChange } = contextValue;
  return (
    <div>
      <input
        type="text"
        value={ inputFilterValue }
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
}

export default InputFilter;

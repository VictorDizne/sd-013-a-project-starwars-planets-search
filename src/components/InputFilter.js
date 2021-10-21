// Requiisto 2.
import React, { useContext } from 'react';
import ContextPlanet from '../contexts/ContextPlanet';

function InputFilter() {
  const contextValue = useContext(ContextPlanet);
  const { inputFilterValue, handleChange } = contextValue;
  return (
    <div>
      <input
        data-testid="name-filter"
        onChange={ handleChange }
        placeholder="Nome do planeta"
        type="text"
        value={ inputFilterValue }
      />
    </div>
  );
}

export default InputFilter;

import React, { useContext } from 'react';
import starWarsContext from '../context';

function Filter() {
  const { name, handleChange } = useContext(starWarsContext);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleChange }
      />
    </div>
  );
}

export default Filter;

/* Referências: Aula de Revisão Hooks realizada pelo instrutor Murilo Wolf */

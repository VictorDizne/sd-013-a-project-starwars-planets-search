import React, { useContext } from 'react';
import MyContext from '../Contexto/MyContext';

export default function Input() {
  const { handleChange } = useContext(MyContext);
  return (
    <div>
      <input onChange={ handleChange } data-testid="name-filter" />
    </div>
  );
}

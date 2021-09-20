import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function Input() {
  const { handleChange } = useContext(myContext);
  return (
    <label htmlFor="#">
      <input onChange={ handleChange } data-testid="name-filter" type="text" />
    </label>
  );
}

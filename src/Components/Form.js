import React, { useContext } from 'react';
import myContext from '../context/myContext';
import Input from './Input';

export default function Form() {
  const { handleChange, handleClick } = useContext(myContext);
  return (
    <div>
      <Input dataId="name-filter" name="planet" type="text" />
      <label htmlFor="columm">
        Choose a columm:
        <select onChange={ handleChange } data-testid="column-filter" name="columm">
          <option>population</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <select onChange={ handleChange } data-testid="comparison-filter" name="quantity">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <Input dataId="value-filter" name="number" type="number" />
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
}

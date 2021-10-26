import React, { useContext, useState, useEffect } from 'react';
import myContext from '../context/myContext';

const options = [
  'population',
  'diameter',
  'orbital_period',
  'rotation_period',
  'surface_water',
];

export default function Sort() {
  return (
    <div>
      <select data-testid="column-sort">
        {options.map((option, i) => <option key={ i }>{option}</option>)}
      </select>
      <label htmlFor="ASC">
        {' '}
        ASC
        <input type="radio" data-testid="column-sort-input-asc" />
      </label>
      <label htmlFor="DESC">
        DESC
        <input type="radio" data-testid="column-sort-input-desc" />
      </label>
      <button type="button">Ordenar</button>
    </div>);
}

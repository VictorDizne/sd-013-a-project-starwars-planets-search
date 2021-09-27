import React, { useState, useContext } from 'react';
import { Context } from '../context/Context';

export default function Select() {
  const { handleClick } = useContext(Context);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState('');

  function filters() {
    return (
      <div>
        <select
          name="column"
          onChange={ ({ target: { value } }) => setColumn(value) }
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          onChange={ ({ target: { value } }) => setComparison(value) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setValor(value) }
        />
        <button
          onClick={ () => handleClick({ column, comparison, value: valor }) }
          type="submit"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </div>
    );
  }

  return (
    <section>
      { filters() }
    </section>
  );
}

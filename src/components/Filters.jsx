import React, { useContext, useState } from 'react';
import { Context } from '../context/MyContext';

function Filters() {
  const { filters, handleOnClickState, handleOnChangeFilterInput } = useContext(Context);

  const [colum, setColum] = useState('population');
  const [comparison, setComparison] = useState('diameter');
  const [value, setValue] = useState(0);

  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="pesquise..."
        onChange={ (event) => handleOnChangeFilterInput(event.target.value) }
        value={ filters.filterByName.name }
      />
      <select
        data-testid="column-filter"
        name="column"
        id="select"
        value={ colum }
        onChange={ (event) => setColum(event.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        id="select"
        value={ comparison }
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        placeholder="fala 300"
        onChange={ (event) => setValue(event.target.value) }
        value={ value }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleOnClickState(colum, comparison, value) }
      >
        filtrar
      </button>
    </section>
  );
}

export default Filters;

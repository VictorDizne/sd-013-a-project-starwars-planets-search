import React, { useContext, useState } from 'react';
import starWarsContext from '../context';

function NumericFilter() {
  const { setData, originalList } = useContext(starWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setValue] = useState(0);

  function handleChangeColumn({ target: { value } }) {
    setColumn(value);
  }

  function handleChangeComparison({ target: { value } }) {
    setComparison(value);
  }

  function handleChangeValue({ target: { value } }) {
    setValue(value);
  }

  function numericFilter() {
    let filteredPlanet;
    if (comparison === 'maior que') {
      filteredPlanet = originalList
        .filter((item) => Number(item[column]) > Number(number));
    }

    if (comparison === 'igual a') {
      filteredPlanet = originalList
        .filter((item) => Number(item[column]) === Number(number));
    }

    if (comparison === 'menor que') {
      filteredPlanet = originalList
        .filter((item) => Number(item[column]) < Number(number));
    }

    setData(filteredPlanet);
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ handleChangeColumn }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ handleChangeComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        value={ number }
        onChange={ handleChangeValue }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ numericFilter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumericFilter;

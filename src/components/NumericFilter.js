import React, { useContext, useState } from 'react';
import starWarsContext from '../context';

function NumericFilter() {
  const {
    setData,
    originalList,
    setFilters,
    filters,
    filters: { filterByNumericValues },
  } = useContext(starWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  function handleChangeColumn(e) {
    setColumn(e.target.value);
  }

  function handleChangeComparison(e) {
    setComparison(e.target.value);
  }

  function handleChangeValue(e) {
    setValue(e.target.value);
  }

  function removeFilter() {
    const option = document.getElementById('my-option');
    option.remove(option.selectedIndex);
  }

  function numericFilter() {
    setFilters({ ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column,
          comparison,
          value,
        }],
    });

    let filteredPlanet;
    if (comparison === 'maior que') {
      filteredPlanet = originalList
        .filter((item) => Number(item[column]) > Number(value));
    }

    if (comparison === 'igual a') {
      filteredPlanet = originalList
        .filter((item) => Number(item[column]) === Number(value));
    }

    if (comparison === 'menor que') {
      filteredPlanet = originalList
        .filter((item) => Number(item[column]) < Number(value));
    }

    setData(filteredPlanet);

    removeFilter();
  }

  return (
    <div>
      <select
        id="my-option"
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
        value={ value }
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

/* Refatoração e lógica de filtragem realizada com a ajuda da pessoa estudante
Douglas Santos Turma 13 Tribo A
Link consultado: https://www.w3schools.com/jsref/met_select_remove.asp */

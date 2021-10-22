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

  const [population, setPopulation] = useState(false);
  const [orbital, setOrbital] = useState(false);
  const [diameter, setDiameter] = useState(false);
  const [rotation, setRotation] = useState(false);
  const [surface, setSurface] = useState(false);

  function handleChangeColumn(e) {
    setColumn(e.target.value);
  }
  function handleChangeComparison(e) {
    setComparison(e.target.value);
  }
  function handleChangeValue(e) {
    setValue(e.target.value);
  }

  function removeOption() {
    const option = document.getElementById('my-option');

    if (option.value === 'population') {
      setPopulation(true);
    }
    if (option.value === 'orbital_period') {
      setOrbital(true);
    }
    if (option.value === 'diameter') {
      setDiameter(true);
    }
    if (option.value === 'rotation_period') {
      setRotation(true);
    }
    if (option.value === 'surface_water') {
      setSurface(true);
    }
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

    removeOption();
  }

  function removeFilter(selectedColumn) {
    const updateFilterByNumericValues = filterByNumericValues
      .filter((item) => item.column !== selectedColumn);
    setFilters({ ...filters,
      filterByNumericValues: updateFilterByNumericValues,
    });

    let filterRemoved = originalList;
    updateFilterByNumericValues.map((itemNum) => {
      if (itemNum.comparison === 'maior que') {
        filterRemoved = filterRemoved
          .filter((item) => Number(item[itemNum.column]) > Number(itemNum.value));
      }
      if (itemNum.comparison === 'igual a') {
        filterRemoved = filterRemoved
          .filter((item) => Number(item[itemNum.column]) === Number(itemNum.value));
      }
      if (itemNum.comparison === 'menor que') {
        filterRemoved = filterRemoved
          .filter((item) => Number(item[itemNum.column]) < Number(itemNum.value));
      }
      return filterRemoved;
    });
    setData(filterRemoved);

    if (selectedColumn === 'population') {
      setPopulation(false);
    }
    if (selectedColumn === 'orbital_period') {
      setOrbital(false);
    }
    if (selectedColumn === 'diameter') {
      setDiameter(false);
    }
    if (selectedColumn === 'rotation_period') {
      setRotation(false);
    }
    if (selectedColumn === 'surface_water') {
      setSurface(false);
    }
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

      {
        population
        && (
          <p data-testid="filter">
            population
            <button
              type="button"
              onClick={ () => removeFilter('population') }
            >
              X
            </button>
          </p>
        )
      }
      {
        orbital
        && (
          <p data-testid="filter">
            orbital_period
            <button
              type="button"
              onClick={ () => removeFilter('orbital_period') }
            >
              X
            </button>
          </p>
        )
      }
      {
        diameter
        && (
          <p data-testid="filter">
            diameter
            <button
              type="button"
              onClick={ () => removeFilter('diameter') }
            >
              X
            </button>
          </p>
        )
      }
      {
        rotation
        && (
          <p data-testid="filter">
            rotation_period
            <button
              type="button"
              onClick={ () => removeFilter('rotation_period') }
            >
              X
            </button>
          </p>
        )
      }
      {
        surface
        && (
          <p data-testid="filter">
            surface_water
            <button
              type="button"
              onClick={ () => removeFilter('surface_water') }
            >
              X
            </button>
          </p>
        )
      }
    </div>
  );
}

export default NumericFilter;

/* Refatoração e lógica de filtragem realizada com a ajuda da pessoa estudante
Douglas Santos Turma 13 Tribo A
Link consultado: https://www.w3schools.com/jsref/met_select_remove.asp */

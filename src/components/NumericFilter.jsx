import React, { useContext, useState } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function NumericFilter() {
  const { objectProvider: {
    data,
    setData,
  } } = useContext(PlanetsContext);

  const [filterBy, setFilterBy] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleChange = ({ target }) => {
    setFilterBy({
      ...filterBy,
      [target.name]: target.value,
    });
  };

  const handleClick = () => {
    const filterColumn = document.getElementById('input-filter');
    const filterComparison = document.getElementById('input-filter-conditon');
    const bigger = document.getElementById('option-bigger');
    const smaller = document.getElementById('option-smaller');
    const equal = document.getElementById('option-equal');

    if (filterBy.column === 'population') {
      const population = document.getElementById('option-population');
      filterColumn.removeChild(population);
    } if (filterBy.column === 'orbital_period') {
      const orbital = document.getElementById('option-orbital');
      filterColumn.removeChild(orbital);
    } if (filterBy.column === 'diameter') {
      const diameter = document.getElementById('option-diameter');
      filterColumn.removeChild(diameter);
    } if (filterBy.column === 'rotation_period') {
      const rotation = document.getElementById('option-rotation');
      filterColumn.removeChild(rotation);
    } if (filterBy.column === 'surface_water') {
      const surface = document.getElementById('option-surface');
      filterColumn.removeChild(surface);
    }

    if (filterBy.comparison === 'maior que') {
      const filter = data
        .filter((planet) => Number(planet[filterBy.column]) > filterBy.value);
      setData(filter);
      filterComparison.removeChild(bigger);
    }
    if (filterBy.comparison === 'menor que') {
      const filter = data
        .filter((planet) => Number(planet[filterBy.column]) < filterBy.value);
      setData(filter);
      filterComparison.removeChild(smaller);
    }
    if (filterBy.comparison === 'igual a') {
      const filter = data
        .filter((planet) => Number(planet[filterBy.column]) === Number(filterBy.value));
      setData(filter);
      filterComparison.removeChild(equal);
    }
  };

  return (
    <form>
      <label htmlFor="input-filter">
        <select
          id="input-filter"
          data-testid="column-filter"
          onChange={ handleChange }
          name="column"
        >
          <option id="option-population" value="population">
            population
          </option>
          <option id="option-orbital" value="orbital_period">
            orbital_period
          </option>
          <option id="option-diameter" value="diameter">
            diameter
          </option>
          <option id="option-rotation" value="rotation_period">
            rotation_period
          </option>
          <option id="option-surface" value="surface_water">
            surface_water
          </option>
        </select>
      </label>
      <label htmlFor="input-filter-conditon">
        <select
          id="input-filter-conditon"
          data-testid="comparison-filter"
          onChange={ handleChange }
          name="comparison"
        >
          <option id="option-bigger" value="maior que">maior que</option>
          <option id="option-smaller" value="menor que">menor que</option>
          <option id="option-equal" value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="input-number">
        <input
          type="number"
          id="input-number"
          data-testid="value-filter"
          onChange={ handleChange }
          name="value"
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Procurar
      </button>
    </form>
  );
}

export default NumericFilter;

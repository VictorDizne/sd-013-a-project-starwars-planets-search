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
    if (filterBy.comparison === 'maior que') {
      const filter = data
        .filter((planet) => Number(planet[filterBy.column]) > filterBy.value);
      setData(filter);
    }
    if (filterBy.comparison === 'menor que') {
      const filter = data
        .filter((planet) => Number(planet[filterBy.column]) < filterBy.value);
      setData(filter);
    }
    if (filterBy.comparison === 'igual a') {
      const filter = data
        .filter((planet) => Number(planet[filterBy.column]) === Number(filterBy.value));
      setData(filter);
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
          <option value="population">
            population
          </option>
          <option value="orbital_period">
            orbital_period
          </option>
          <option value="diameter">
            diameter
          </option>
          <option value="rotation_period">
            rotation_period
          </option>
          <option value="surface_water">
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
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
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

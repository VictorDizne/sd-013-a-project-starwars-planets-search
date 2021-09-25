import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilters() {
  const {
    handleFilter,
    filterNumeric,
    filteredPlanets,
    setPlanetsInfo } = useContext(PlanetsContext);

  // const filterPlanetsByNumericValue = () => {
  //   const { filterByNumericValues: { column, comparison, value } } = filterNumeric;
  //   if (comparison === 'bigger') {
  //     const filPlanets = filteredPlanets
  //       .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
  //     setPlanetsInfo(filPlanets);
  //     return filPlanets;
  //   }
  //   if (comparison === 'menor que') {
  //     const filPlanets = filteredPlanets
  //       .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
  //     setPlanetsInfo(filPlanets);
  //     return filPlanets;
  //   }
  //   if (comparison === 'igual a') {
  //     const filPlanets = filteredPlanets
  //       .filter((planet) => parseInt(planet[column], 10) === parseInt(value, 10));
  //     setPlanetsInfo(filPlanets);
  //     return filPlanets;
  //   }
  //   return filteredPlanets;
  // };

  const filterPlanetsByNumericValue = () => {
    const { filterByNumericValues: { column, comparison, value } } = filterNumeric;
    let filPlanets;
    switch (comparison) {
    case 'maior que':
      filPlanets = filteredPlanets
        .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
      setPlanetsInfo(filPlanets);
      break;
    case 'menor que':
      filPlanets = filteredPlanets
        .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
      setPlanetsInfo(filPlanets);
      break;
    case 'igual a':
      filPlanets = filteredPlanets
        .filter((planet) => parseInt(planet[column], 10) === parseInt(value, 10));
      setPlanetsInfo(filPlanets);
      break;
    default:
    }
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleFilter }
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
        onChange={ handleFilter }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ handleFilter }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => filterPlanetsByNumericValue() }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumericFilters;

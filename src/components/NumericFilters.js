import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilters() {
  const {
    handleFilter,
    filterNumeric,
    filteredPlanets,
    setPlanetsInfo,
  } = useContext(PlanetsContext);

  const { filterByNumericValues } = filterNumeric;

  const [columnFilter, setColumnFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const deleteFilters = () => {
    const { column } = filterByNumericValues;
    columnFilter.splice(columnFilter.indexOf(column), 1);
    setColumnFilter(columnFilter);
  };

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
    deleteFilters();
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleFilter }
      >
        {columnFilter.map((column, index) => (
          <option key={ index } value={ column }>{column}</option>
        ))}
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

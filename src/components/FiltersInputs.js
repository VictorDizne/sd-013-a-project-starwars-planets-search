import React, { useContext, useState } from 'react';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';

const FiltersInputs = () => {
  const {
    setStates: { setColumn, setComparison, setValue, getFiltersUsed, makeSearch, setFilteredPlanets, handleNumericFilters },
    planets,
  } = useContext(PlanetsAndFiltersContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNumericFilters();
  };

  const filterPlanetsByName = ({ target: { value } }) => {
    makeSearch(value);

    const filteredPlanets = planets
      .filter((planet) => planet.name.toLowerCase().includes(value.toLowerCase()));

    setFilteredPlanets([...filteredPlanets]);
  };

  const [columnValues, filterColumnValues] = useState([
    { value: 'population', id: 1 },
    { value: 'orbital_period', id: 2 },
    { value: 'diameter', id: 3 },
    { value: 'rotation_period', id: 4 },
    { value: 'surface_water', id: 5 },
  ]);

  return (
    <div>
      <input
        type="text"
        name="search-name-filter"
        data-testid="name-filter"
        onChange={ filterPlanetsByName }
      />

      <form onSubmit={ handleSubmit }>

        {/* <ColumnFilter /> */}

        <label htmlFor="column-filter">
          Filter:
          <select
            name="column-filter"
            id="column-filter"
            data-testid="column-filter"
            onChange={ ({ target: { value } }) => setColumn(value) }
          >
            {columnValues
              // .filter(({ value }) => !value.includes(filtersUsed.find((filter => filter === value))))
              .map(({ value, id }) => (
                <option key={ id } value={ value }>{ value }</option>))}
          </select>
        </label>

        <label htmlFor="comparison-filter">
          Compare:
          <select
            name="comparison-filter"
            id="comparison-filter"
            data-testid="comparison-filter"
            onChange={ ({ target: { value } }) => setComparison(value) }
          >
            <option value="maior que" selected>maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <label htmlFor="value-filter">
          Value:
          <input
            type="number"
            name="value-filter"
            id="value-filter"
            data-testid="value-filter"
            onChange={ ({ target: { value } }) => setValue(value) }
          />
        </label>

        <button type="submit" data-testid="button-filter">Filter</button>
      </form>
    </div>
  );
};

export default FiltersInputs;

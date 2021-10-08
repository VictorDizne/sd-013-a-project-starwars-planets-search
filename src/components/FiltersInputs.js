import React, { useContext, useState } from 'react';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';

const FiltersInputs = () => {
  const {
    setStates: { setColumn, setComparison, setValue, setSearchterm, setFilteredPlanets, handleNumericFilters, setNumericFilters },
    planets,
    columnFilter,
  } = useContext(PlanetsAndFiltersContext);

  const filterPlanetsByName = ({ target: { value } }) => {
    setSearchterm(value);
  };

  const [columnValues, filterColumnValues] = useState([
    { value: 'population', id: 1 },
    { value: 'orbital_period', id: 2 },
    { value: 'diameter', id: 3 },
    { value: 'rotation_period', id: 4 },
    { value: 'surface_water', id: 5 },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputsSelecteds = Array.prototype
      .filter
      .call(event.target.elements,
        (element) => element.tagName.toLowerCase() !== 'button')
      .reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});

    setNumericFilters(inputsSelecteds);

    // setNumericFilters((prevState) => [...prevState, inputsSelecteds]);
  };

  return (
    <div>

      <input
        type="text"
        name="search-name-filter"
        data-testid="name-filter"
        onChange={ filterPlanetsByName }
      />

      <form onSubmit={ handleSubmit }>

        <label htmlFor="column">
          Filter:
          <select
            name="column"
            id="column-filter"
            data-testid="column-filter"
          >
            {columnValues
              // .filter(({ value }) => !value.includes(filtersUsed.find((filter => filter === value))))
              .map(({ value, id }) => (
                <option key={ id } value={ value }>{value}</option>))}
          </select>
        </label>

        <label htmlFor="comparison">
          Compare:
          <select
            name="comparison"
            id="comparison-filter"
            data-testid="comparison-filter"
          >
            <option value="maior que" selected>maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <label htmlFor="value">
          Value:
          <input
            type="number"
            name="value"
            id="value-filter"
            data-testid="value-filter"
          />
        </label>

        <button type="submit" data-testid="button-filter">Filter</button>
      </form>
    </div>
  );
};

export default FiltersInputs;

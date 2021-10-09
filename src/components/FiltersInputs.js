import React, { useContext, useState } from 'react';
import { PlanetsAndFiltersContext } from '../context/PlanetsAndFiltersContext';

const FiltersInputs = () => {
  const {
    setStates: { setSearchterm, setNumericFilters },
  } = useContext(PlanetsAndFiltersContext);

  const [columnValues, setColumnValues] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filters, setFilters] = useState([]);

  const filterPlanetsByName = ({ target: { value } }) => {
    setSearchterm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedInputs = [...event.target.elements]
      .filter((element) => element.tagName.toLowerCase() !== 'button')
      .reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});

    setNumericFilters((prevState) => [...prevState, selectedInputs]);

    setColumnValues(columnValues.filter((value) => value !== selectedInputs.column));

    setFilters((prevState) => [...prevState, selectedInputs]);
  };

  const removeFilter = (column) => {
    const removedFilter = filters.filter((filter) => filter.column !== column);

    setFilters(removedFilter);
    setColumnValues((prevState) => [...prevState, column]);
    setNumericFilters(removedFilter);
  };
  // Preciso remover o filtro do estado de setFilters, setColumnValues e setNumericFilters.

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
              .map((value) => (
                <option key={ value } value={ value }>{value}</option>))}
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

      <ul>
        {
          filters && filters.map(({ column, comparison, value }) => (
            <li
              key={ `${column}-filter` }
              data-testid="filter"
            >
              {`Filtro: ${column} - ${comparison} - ${value} `}
              <button
                type="button"
                key={ `${column}-button` }
                onClick={ () => removeFilter(column) }
              >
                X
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default FiltersInputs;

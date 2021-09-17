import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

const EspecificFilters = () => {
  const { isFetching, handleFiltersChange } = useContext(StarWarsContext);
  const optionA = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const optionB = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const elements = (
    <div
      className="filters-container"
    >
      <label
        htmlFor="select"
      >
        <select
          data-testid="column-filter"
          id="select"
          name="column"
          onChange={ handleFiltersChange }
        >
          {optionA.map((el, i) => (
            <option
              key={ i }
              value={ el }
            >
              {el}
            </option>
          ))}
        </select>
      </label>
      <label
        htmlFor="select-comparison"
      >
        <select
          data-testid="comparison-filter"
          id="select-comparison"
          name="comparison"
          onChange={ handleFiltersChange }

        >
          {optionB.map((e, i) => (
            <option
              key={ i }
              value={ e }
            >
              {e}
            </option>
          ))}
        </select>
      </label>
      <label
        htmlFor="input"
      >
        <input
          id="input"
          data-testid="value-filter"
          placeholder="valor"
          name="value"
          onChange={ handleFiltersChange }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
      >
        filtrar
      </button>
    </div>
  );
  return (
    !isFetching && elements
  );
};

export default EspecificFilters;

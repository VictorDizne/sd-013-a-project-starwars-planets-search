import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SelectBar() {
  const {
    inputColumn,
    inputComparison,
    inputValue,
    handleChange,
    handleClick,
  } = useContext(PlanetContext);

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ].filter((columnOption) => columnOption !== inputColumn);

  const compareOptions = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <>

      <select
        data-testid="column-filter"
        name="column"
        value={ inputColumn }
        onChange={ handleChange }
      >
        {columnOptions.map((columnOption, index) => (
          <option key={ index } label={ columnOption } value={ columnOption }>
            {columnOption}
          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ inputComparison }
        onChange={ handleChange }
      >
        {compareOptions.map((compareOption, index) => (
          <option value={ compareOption } label={ compareOption } key={ index }>
            {compareOption}
          </option>
        ))}
      </select>

      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ inputValue }
        onChange={ handleChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick(inputColumn, inputComparison, inputValue) }
      >
        Filtrar
      </button>

    </>
  );
}

export default SelectBar;

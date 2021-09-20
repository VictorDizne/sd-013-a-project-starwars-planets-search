import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SelectBar() {
  const {
    column,
    comparison,
    valuer,
    filterOptions,
    handleColumn,
    handleComparison,
    handleValuer,
  } = useContext(PlanetContext);

  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparations = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <>
      <select data-testid="column-filter" name="column" onChange={ handleColumn }>
        {options.map((option, index) => (
          <option key={ index } label={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleColumn }
      >
        {comparations.map((compare, index) => (
          <option value={ compare } label={ compare } key={ index }>
            {compare}
          </option>
        ))}
      </select>

      <input
        name="value"
        onChange={ handleColumn }
        data-testid="value-filter"
        type="number"
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => filterOptions(column, comparison, valuer) }
      >
        Filtrar
      </button>

    </>
  );
}

export default SelectBar;

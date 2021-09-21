import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SelectBar() {
  const {
    handleClick,
    handleSelect,
    inputNumber,
    inputColumn,
    setInputColumn,
  } = useContext(PlanetContext);

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const compareOptions = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <>

      <select data-testid="column-filter" name="column" value={ inputColumn } onChange={ (event) => setInputColumn(event.target.value) }>
        {columnOptions.map((columnOption, index) => (
          <option key={ index } label={ columnOption } value={ columnOption }>
            {columnOption}
          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleSelect }
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
        value={ inputNumber }
        onChange={ handleSelect }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick(inputNumber) }
      >
        Filtrar
      </button>

    </>
  );
}

export default SelectBar;

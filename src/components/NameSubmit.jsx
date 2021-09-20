import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function NameSubmit() {
  const { objectProvider: { filterPlanet, handleChange } } = useContext(PlanetsContext);
  const { filters: { filterByName: { name } } } = filterPlanet;

  return (
    <label htmlFor="input-name">
      <input
        type="text"
        id="input-name"
        placeholder="digite para filtrar seu planeta"
        onChange={ handleChange }
        value={ name }
        data-testid="name-filter"
      />
    </label>
  );
}

export default NameSubmit;

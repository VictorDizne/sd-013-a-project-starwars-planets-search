import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function NameSubmit() {
  const {
    objectProvider: { filterPlanet, setFilterPlanet },
  } = useContext(PlanetsContext);
  const {
    // filters,
    filters: {
      filterByName: { name },
    },
  } = filterPlanet;

  const handleChangeName = ({ target: { value } }) => {
    setFilterPlanet({
      filters: { filterByName: { name: value } },
    });
  };

  return (
    <label htmlFor="input-name">
      <input
        type="text"
        id="input-name"
        placeholder="digite para filtrar seu planeta"
        onChange={ handleChangeName }
        value={ name }
        data-testid="name-filter"
      />
    </label>
  );
}

export default NameSubmit;

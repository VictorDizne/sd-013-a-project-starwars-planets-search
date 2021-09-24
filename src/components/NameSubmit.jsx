import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function NameSubmit() {
  const {
    objectProvider: { filterName, setFilterName },
  } = useContext(PlanetsContext);
  const { name } = filterName;

  const handleChangeName = ({ target: { value } }) => {
    setFilterName({ name: value });
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

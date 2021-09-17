import React, { useContext } from 'react';
import planetsContext from '../contextAPI';

function FilterForm() {
  const { filters: { filterByName: { name } } } = useContext(planetsContext);
  const { functions: { handleChangePlanetInput } } = useContext(planetsContext);

  return (
    <input
      type="text"
      value={ name }
      onChange={ handleChangePlanetInput }
      data-testid="name-filter"
      placeholder="Nome do planeta"
    />
  );
}

export default FilterForm;

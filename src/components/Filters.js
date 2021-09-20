import React, { useContext } from 'react';
import { Context } from '../context/PlanetProvider';
import NumericValuesFilter from './NumericValuesFilter';

function Filters() {
  const { handleSearchByName } = useContext(Context);

  return (
    <form>
      <label htmlFor="planetName">
        Planet Name
        <input
          name="planetName"
          type="text"
          onChange={ (e) => handleSearchByName(e.target.value) }
          data-testid="name-filter"
        />
      </label>
      <NumericValuesFilter />
    </form>
  );
}

export default Filters;

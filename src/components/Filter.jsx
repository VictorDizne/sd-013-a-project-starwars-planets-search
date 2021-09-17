import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { handleChange } = useContext(PlanetsContext);

  return (
    <form>
      <label htmlFor="input-name">
        Nome:
        <input
          id="input-name"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

export default Filter;

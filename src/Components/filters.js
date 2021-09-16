import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

function Filters() {
  const context = useContext(PlanetContext);
  const { setFilterByName } = context;
  return (
    <div>
      <label htmlFor="byName">
        Procure por nome
        <input
          data-testid="name-filter"
          type="text"
          id="byName"
          onChange={ setFilterByName }
        />
      </label>
    </div>
  );
}

export default Filters;

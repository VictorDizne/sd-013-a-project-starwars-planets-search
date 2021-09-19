import React, { useContext } from 'react';
import { Context } from '../context/PlanetProvider';

function Filters() {
  const { filters, setFilters } = useContext(Context);

  return (
    <form>
      <label htmlFor="planetName">
        Planet Name
        <input
          name="planetName"
          type="text"
          onChange={ (e) => setFilters({ ...filters, filterByName: { name: e.target.value } }) }
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default Filters;

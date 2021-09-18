import React, { useContext } from 'react';
import ContextSwapi from '../context/ContextSwapi';

export default function SelectFilterForm() {
  const { swapi, setnameOfThePlanet } = useContext(ContextSwapi);
  if (!swapi) return null;
  return (
    <div className="filter-container">
      <form action="">
        <input
          data-testid="name-filter"
          type="text"
          value={ swapi.filters.filterByName.name }
          onChange={ setnameOfThePlanet }
        />
        <select name="select" id="select">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </form>
    </div>
  );
}

import React from 'react';

export default function SelectFilterForm() {
  return (
    <div className="filter-container">
      <form action="">
        <input type="text" />
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

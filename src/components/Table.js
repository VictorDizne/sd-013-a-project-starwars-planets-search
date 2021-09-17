import React, { useContext } from 'react';
import ContextSwapi from '../context/ContextSwapi';

export default function Table() {
  const { swapi } = useContext(ContextSwapi);
  return (
    <table className="table">
      <tr>
        <th>name</th>
        <th>rotation_period</th>
        <th>orbital_period</th>
        <th>diameter</th>
        <th>climate</th>
        <th>gravity</th>
        <th>terrain</th>
        <th>surface_water</th>
        <th>population</th>
      </tr>
    </table>
  );
}

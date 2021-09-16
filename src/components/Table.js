import React, { useContext } from 'react';
import { DataContext } from '../context/MainContext';
import TableRow from './TableRow';

export default function Table() {
  const { data, isReady } = useContext(DataContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {isReady
          && data.map((planet) => <TableRow key={ planet.name } planet={ planet } />)}
      </tbody>
    </table>
  );
}

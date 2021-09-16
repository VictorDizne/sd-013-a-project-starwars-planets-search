import React, { useContext } from 'react';
import TableBody from './TableBody';
import Context from '../context/Context';

function Table() {
  const value = useContext(Context);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation period</th>
          <th>Orbital period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      {value.data
        ? <TableBody planetsList={ value.data } />
        : <h3>Loading...</h3>}
    </table>
  );
}

export default Table;

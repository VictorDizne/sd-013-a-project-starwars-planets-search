import React, { useContext } from 'react';
import { DataContext, FilterContext, isNumeric } from '../context/MyContext';
import TableRow from './TableRow';

const ONE = 1;

export default function Table() {
  const { data, isReady } = useContext(DataContext);

  const { filters } = useContext(FilterContext);

  function orderByColumn(arr) {
    const { order } = filters;
    const { column, sort } = order;
    if (isNumeric(data[0][column])) {
      return arr.sort((a, b) => {
        if (sort === 'DESC') return b[column] - a[column];
        return a[column] - b[column];
      });
    }
    return arr.sort((a, b) => {
      if (a[column] > b[column]) {
        return sort === 'ASC' ? ONE : -ONE;
      }
      if (b[column] > a[column]) {
        return sort === 'ASC' ? -ONE : ONE;
      }
      return 0;
    });
  }

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
          && orderByColumn(data)
            .map((planet) => <TableRow key={ planet.name } planet={ planet } />)}
      </tbody>
    </table>
  );
}

import React, { useContext } from 'react';
import TableMax from './TableMax';
import MyContext from '../context/Context';

export default function Table() {
  const { planetKeys } = useContext(MyContext);

  return (
    <table>
      <thead>
        <tr>
          {planetKeys.map((key, index) => (
            <th key={ index }>{key}</th>
          ))}
        </tr>
      </thead>
      <TableMax />
    </table>
  );
}

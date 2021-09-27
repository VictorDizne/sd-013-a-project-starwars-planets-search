import React, { useContext } from 'react';
import TableBody from './TableBody';
import myContext from '../context/Context';

function Table() {
  const { planetsKeys } = useContext(myContext);

  return (
    <table>
      <thead>
        <tr>
          {planetsKeys.map((key, idx) => <th key={ idx }>{key}</th>)}
        </tr>
      </thead>
      <TableBody />
    </table>
  );
}

export default Table;

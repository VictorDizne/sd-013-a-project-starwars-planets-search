import React, { useContext } from 'react';
import starWarsContext from '../Context';
import TableBody from './TableBody';
import TableHead from './TableHead';

function Table() {
  const { loading } = useContext(starWarsContext);
  if (loading) {
    return <p>LOADING TABLE....</p>;
  }
  return (
    <table>
      <TableHead />
      <TableBody />
    </table>
  );
}

export default Table;

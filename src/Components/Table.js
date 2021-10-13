import React, { useContext } from 'react';
import SwapiContext from '../Context/SwapiContext';
import TableBody from './TableBody';
import TableHead from './TableHead';

function Table() {
  const { /* data */ loading } = useContext(SwapiContext);
  if (loading) {
    return (
      <p>Loading</p>
    );
  }
  return (
    <table>
      <TableHead />
      <TableBody />
    </table>
  );
}

export default Table;

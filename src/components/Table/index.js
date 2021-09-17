import React from 'react';
import TableBody from '../TableBody';
import TableHeader from '../TableHeader';
import usePlanetsContext from '../../hooks/usePlanetsContext';
import Loading from '../Loading';

function Table() {
  const { isPlanetsFilled } = usePlanetsContext();

  return (
    isPlanetsFilled
      ? (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )
      : <Loading />
  );
}

export default Table;

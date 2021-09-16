import React from 'react';
// import usePlanetsContext from '../../hooks/usePlanetsContext';
// import Loading from '../Loading';
// import Loading from '../Loading';
import TableBody from '../TableBody';
import TableHeader from '../TableHeader';

function Table() {
  // const { isPlanetsFilled } = usePlanetsContext();

  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  );

  // return <div>teste</div>;
}

export default Table;

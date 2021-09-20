import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import TableColumns from './TableColumns';
import TableRow from './TableRow';

function Table() {
  const { data, isLoading } = useContext(DataContext);
  return (
    <div>
      TABLE
      { isLoading && 'Loading' }
      { data && (
        <table>
          <TableColumns />
          <TableRow />
        </table>
      )}
    </div>
  );
}

export default Table;

import React from 'react';
import TableBody from './TableBody';
import TableTitles from './TableTitles';
import '../css/Table.css';
import TableHeader from './TableHeader';

function Table() {
  return (
    <div className="countainerTable">
      <TableHeader />
      <table>
        <TableTitles />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;

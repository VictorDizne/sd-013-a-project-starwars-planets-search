import React from 'react';
import TableBody from './TableBody';
import TableTitles from './TableTitles';
import '../css/Table.css';
import InputSearch from './InputSearch';

function Table() {
  return (
    <>
      <InputSearch />
      <table>
        <TableTitles />
        <TableBody />
      </table>
    </>
  );
}

export default Table;

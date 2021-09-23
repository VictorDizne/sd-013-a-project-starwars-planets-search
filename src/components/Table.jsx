import React from 'react';
import TableBody from './TableBody';
import TableTitles from './TableTitles';
import '../css/Table.css';
import InputSearch from './InputSearch';
import FilterNumber from './FilterNumber';

function Table() {
  return (
    <>
      <InputSearch />
      <FilterNumber />
      <table>
        <TableTitles />
        <TableBody />
      </table>
    </>
  );
}

export default Table;

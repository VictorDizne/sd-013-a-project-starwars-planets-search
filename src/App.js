import React from 'react';
import TableProvider from './utils/TableProvider';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import FilterProvider from './utils/FilterProvider';

function App() {
  return (
    <FilterProvider>
      <TableProvider>
        <Filters />
        <Table />
      </TableProvider>
    </FilterProvider>
  );
}

export default App;

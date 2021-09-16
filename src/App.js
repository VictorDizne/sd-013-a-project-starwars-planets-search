import React from 'react';
import TableProvider from './utils/TableProvider';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <TableProvider>
      <Table />
    </TableProvider>
  );
}

export default App;

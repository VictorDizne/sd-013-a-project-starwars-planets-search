import React from 'react';
import Table from './components/Table';
import DataProvider from './context/MyContext';

function App() {
  return (
    <DataProvider>
      <Table />
      <span>Teste</span>
    </DataProvider>
  );
}

export default App;

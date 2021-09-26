import React from 'react';
import './App.css';
import Table from './componets/Table';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Table />
    </DataProvider>
  );
}

export default App;

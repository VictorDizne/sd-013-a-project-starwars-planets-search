import React from 'react';
import Table from './components/Table';
import DataProvider from './context/DataProvider';
import './App.css';

function App() {
  return (
    <DataProvider>
      <Table />
    </DataProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import SearchTab from './components/SearchTab';
import Table from './components/Table';
import DataProvider from './context/MainContext';

function App() {
  return (
    <DataProvider>
      <SearchTab />
      <Table />
      <span>Span</span>
    </DataProvider>
  );
}

export default App;

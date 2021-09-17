import React from 'react';
import './App.css';
import Filters from './components/Filters';
import SearchTab from './components/SearchTab';
import Table from './components/Table';
import DataProvider from './context/MainContext';

function App() {
  return (
    <DataProvider>
      <SearchTab />
      <Filters />
      <Table />
      <span>Span</span>
    </DataProvider>
  );
}

export default App;

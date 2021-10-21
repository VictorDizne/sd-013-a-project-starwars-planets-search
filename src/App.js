import React from 'react';
import './App.css';
import MyProvider from './context/MyProvider';
import Table from './components/Table';
import FilterTable from './components/FilterTable';
import RemoveFilter from './components/RemoveFilter';

function App() {
  return (
    <MyProvider>
      <FilterTable />
      <RemoveFilter />
      <Table />
    </MyProvider>
  );
}

export default App;

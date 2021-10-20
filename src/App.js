import React from 'react';
import './App.css';
import MyProvider from './context/MyProvider';
import Table from './components/Table';
import FilterTable from './components/FilterTable';

function App() {
  return (
    <MyProvider>
      <FilterTable />
      <Table />
    </MyProvider>
  );
}

export default App;

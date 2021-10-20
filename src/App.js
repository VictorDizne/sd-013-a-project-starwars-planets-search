import React from 'react';
import './App.css';
import FilterName from './components/FilterName';
import Table from './components/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <FilterName />
      <Table />
    </MyProvider>
  );
}

export default App;

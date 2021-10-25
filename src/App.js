import React from 'react';
import './App.css';
import Table from './Components/Table';
import FilterByName from './Components/filterByName';
import FilterByNumbers from './Components/filterByNumbers';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <FilterByName />
      <FilterByNumbers />
      <Table />
    </Provider>
  );
}

export default App;

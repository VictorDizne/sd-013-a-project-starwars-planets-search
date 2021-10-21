import React from 'react';
import FilterPlanet from './components/FilterPlanet';
import Table from './components/Table';
import DataProvider from './context/MyContext';

function App() {
  return (
    <DataProvider>
      <FilterPlanet />
      <Table />
      <span>Teste</span>
    </DataProvider>
  );
}

export default App;

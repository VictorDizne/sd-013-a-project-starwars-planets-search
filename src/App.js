import React from 'react';
import FilterPlanetAndNumber from './components/FilterPlanetAndNumber';
import Table from './components/Table';
import DataProvider from './context/MyContext';

function App() {
  return (
    <DataProvider>
      <FilterPlanetAndNumber />
      <Table />
    </DataProvider>
  );
}

export default App;

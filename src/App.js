import React from 'react';
import Filter from './components/Filter';
import FilterPlanetAndNumber from './components/FilterPlanetAndNumber';
import Table from './components/Table';
import DataProvider from './context/MyContext';

function App() {
  return (
    <DataProvider>
      <FilterPlanetAndNumber />
      <Filter />
      <Table />
    </DataProvider>
  );
}

export default App;

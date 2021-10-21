import React from 'react';
import FilterPlanetAndNumber from './components/FilterPlanetAndNumber';
// import FilterPlanet from './components/FilterPlanet';
import Table from './components/Table';
import DataProvider from './context/MyContext';

function App() {
  return (
    <DataProvider>
      <FilterPlanetAndNumber />
      <Table />
      <span>Teste</span>
    </DataProvider>
  );
}

export default App;

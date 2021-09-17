import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import './App.css';
import Filter from './components/Filters';
import SelectFilters from './components/SelectFilters';

function App() {
  return (
    <PlanetProvider>
      <form>
        <Filter />
        <SelectFilters />
      </form>
      <Table />
    </PlanetProvider>
  );
}

export default App;

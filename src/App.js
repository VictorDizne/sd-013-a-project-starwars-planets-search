import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import './App.css';
import Filter from './components/Filters';

function App() {
  return (
    <PlanetProvider>
      <Filter />
      <Table />
    </PlanetProvider>
  );
}

export default App;

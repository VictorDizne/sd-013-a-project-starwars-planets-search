import React from 'react';
import Table from './Components/Table';
import './App.css';
import PlanetProvider from './Context/PlanetProvider';
import Filters from './Components/filters';

function App() {
  return (
    <PlanetProvider>
      <Filters />
      <Table />
    </PlanetProvider>
  );
}

export default App;

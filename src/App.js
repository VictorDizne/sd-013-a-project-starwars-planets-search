import React from 'react';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import PlanetsProvider from './context/PlanetsContext';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

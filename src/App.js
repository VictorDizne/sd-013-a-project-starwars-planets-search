import React from 'react';
import './App.css';
import Table from './components/Table';
import Filters from './components/FiltersBar';
import PlanetsProvider from './context/Provider';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

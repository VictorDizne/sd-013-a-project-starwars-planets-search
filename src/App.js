import React from 'react';
import './App.css';
import { PlanetsProvider } from './components/PlanetsContext';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;

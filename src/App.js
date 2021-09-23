import React from 'react';
import './App.css';
import NameSubmit from './components/NameSubmit';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import PlanetsProvider from './Context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <NameSubmit />
      <NumericFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

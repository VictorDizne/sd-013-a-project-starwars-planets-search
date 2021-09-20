import React from 'react';
import './App.css';
import NameSubmit from './components/NameSubmit';
import Table from './components/Table';
import PlanetsProvider from './Context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <NameSubmit />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

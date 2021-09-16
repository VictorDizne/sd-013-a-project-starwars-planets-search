import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvide from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvide>
      <Table />
    </PlanetsProvide>
  );
}

export default App;

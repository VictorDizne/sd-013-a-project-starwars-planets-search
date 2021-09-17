import React from 'react';
import './App.css';
import FilterTable from './components/FilterTable';
import Table from './components/Table';
import PlanetsProvide from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvide>
      <FilterTable />
      <Table />
    </PlanetsProvide>
  );
}

export default App;

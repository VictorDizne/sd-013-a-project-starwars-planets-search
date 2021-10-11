import React from 'react';
import './App.css';
import RenderTable from './components/Table';
import Filters from './components/Filters';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <RenderTable />
    </PlanetsProvider>
  );
}

export default App;

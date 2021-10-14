import React from 'react';
import './App.css';
import Filters from './Components/Filters';
import Table from './Components/Table';
import PlanetsProvider from './Context/PlanetsProvider';
import FilterRemover from './Components/FilterRemover';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <FilterRemover />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

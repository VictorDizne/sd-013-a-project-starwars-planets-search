import React from 'react';
import { PlanetsProvider } from './context/PlanetsAndFiltersContext';
import Table from './pages/Table';
import FiltersInputs from './components/FiltersInputs';

function App() {
  return (
    <PlanetsProvider>
      <header>
        <h1>Trybewars</h1>
        <FiltersInputs />
      </header>
      <main>
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;

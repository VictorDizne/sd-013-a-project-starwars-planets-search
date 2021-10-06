import React from 'react';
import { PlanetsProvider } from './context/PlanetsAndFiltersContext';
import Table from './pages/Table';
import FiltersInputs from './components/FiltersInputs';

function App() {
  return (
    <PlanetsProvider>
      <nav>
        <h1>Trybewars</h1>
      </nav>
      <main>
        <FiltersInputs />
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;

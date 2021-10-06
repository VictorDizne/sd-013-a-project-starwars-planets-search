import React from 'react';
import { PlanetsProvider } from './context/PlanetsAndFiltersContext';
import Table from './pages/Table';
import NameFilter from './components/NameFilter';

function App() {
  return (
    <PlanetsProvider>
      <nav>
        <h1>Trybewars</h1>
      </nav>
      <main>
        <NameFilter />
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;

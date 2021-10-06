import React from 'react';
import { PlanetsProvider } from './context/PlanetsContext';
import Table from './pages/Table';
import FilterInput from './components/FilterInput';

function App() {
  return (
    <PlanetsProvider>
      <nav>
        <h1>Trybewars</h1>
      </nav>
      <main>
        <FilterInput />
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;

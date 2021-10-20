import React from 'react';
import { PlanetsProvider } from './context/PlanetsContext';
import Table from './pages/Table';

function App() {
  return (
    <PlanetsProvider>
      <nav>
        <span>Hello, Jedi Universe!</span>
      </nav>
      <main>
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;

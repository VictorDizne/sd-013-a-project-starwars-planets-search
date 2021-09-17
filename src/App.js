// React
import React from 'react';

// Children
import Table from './components/Table';

// Context
import PlanetsProvider from './context/Planets';

// Styles
import './styles/index.css';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import PlanetTable from './components/PlanetTable';
import TableFilters from './components/TableFilters';
import PlanetContextProvider from './contexts/PlanetContextProvider';

function App() {
  return (
    <PlanetContextProvider>
      <TableFilters />
      <PlanetTable />
    </PlanetContextProvider>
  );
}

export default App;

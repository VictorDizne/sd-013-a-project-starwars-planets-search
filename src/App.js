import React from 'react';
import './App.css';
import PlanetTable from './components/PlanetTable';
import TableFilter from './components/TableFilter';
import PlanetContextProvider from './contexts/PlanetContextProvider';

function App() {
  return (
    <PlanetContextProvider>
      <TableFilter />
      <PlanetTable />
    </PlanetContextProvider>
  );
}

export default App;

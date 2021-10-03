import React from 'react';
import './App.css';
import SWAPITable from './components/SWAPITable';
import PlanetContextProvider from './contexts/PlanetContextProvider';
import TableFilter from './components/TableFilter';

function App() {
  return (
    <PlanetContextProvider>
      <TableFilter />
      <SWAPITable />
    </PlanetContextProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import PlanetsTable from './components/PlanetsTable';
import SWProvider from './contextAPI/SWProvider';

function App() {
  return (
    <SWProvider>
      <PlanetsTable />
    </SWProvider>
  );
}

export default App;

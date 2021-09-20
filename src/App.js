import React from 'react';
import InputFilters from './Components/InputFilters';
import PlanetsProvider from './context/PlanetsProvider';
import Planets from './pages/Planets';

function App() {
  return (
    <PlanetsProvider>
      <span>
        Hello, App!
        <InputFilters />
        <Planets />
      </span>
    </PlanetsProvider>
  );
}

export default App;

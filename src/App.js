import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Planets from './pages/Planets';

function App() {
  return (
    <PlanetsProvider>
      <span>
        Hello, App!
        <Planets />
      </span>
    </PlanetsProvider>
  );
}

export default App;

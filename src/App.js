import React from 'react';
import StarWarsProvider from './context/StartWarsProvider';
import PlanetTable from './components/PlanetTable';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <PlanetTable />
    </StarWarsProvider>
  );
}

export default App;

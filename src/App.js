import React from 'react';
import StarWarsProvider from './context/StartWarsProvider';
import PlanetTable from './components/PlanetTable';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <PlanetTable />
    </StarWarsProvider>
  );
}

export default App;

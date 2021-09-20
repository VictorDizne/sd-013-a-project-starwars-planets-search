import React from 'react';
import StarWarsProvider from './context/StartWarsProvider';
import PlanetTable from './components/PlanetTable';
import Header from './components/Header';
import FilterTable from './components/FilterTable';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <FilterTable />
      <PlanetTable />
    </StarWarsProvider>
  );
}

export default App;

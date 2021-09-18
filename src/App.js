import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <PlanetProvider>
      <SearchBar />
      <Table />
    </PlanetProvider>
  );
}
export default App;

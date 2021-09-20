import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import SelectBar from './components/SelectBar';

function App() {
  return (
    <PlanetProvider>
      <SearchBar />
      <SelectBar />
      <Table />
    </PlanetProvider>
  );
}
export default App;

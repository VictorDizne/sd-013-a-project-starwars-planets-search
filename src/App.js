import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import SelectBar from './components/SelectBar';

function App() {
  return (
    <PlanetProvider>
      <h1> PLANETS FROM STAR WARS </h1>
      <div className="header">
        <SearchBar />
        <SelectBar />
      </div>
      <Table />
    </PlanetProvider>
  );
}
export default App;

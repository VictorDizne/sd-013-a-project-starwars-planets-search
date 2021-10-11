import React from 'react';
import './App.css';
import { PlanetsProvider } from './components/PlanetsContext';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <SearchBar />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

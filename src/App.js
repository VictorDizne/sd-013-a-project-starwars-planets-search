import React from 'react';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
    <h1>Star Wars Planet Search</h1>
      <SearchBar />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

// comecando o projeto

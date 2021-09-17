import React from 'react';
import './App.css';
import NumericFilters from './components/NumericFilters';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import UsedFilters from './components/UsedFilters';
import PlanetsContextProvider from './contexts/PlanetsContextProvider';

function App() {
  return (
    <PlanetsContextProvider>
      <div>
        <SearchBar />
      </div>
      <NumericFilters />
      <UsedFilters />
      <Table />
    </PlanetsContextProvider>
  );
}

export default App;

// React
import React from 'react';

// Children
import Table from './components/Table';
import SearchForm from './components/SearchForm';

// Context
import PlanetsProvider from './context/Planets';

// Styles
import './styles/index.css';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <SearchForm />
        <ul id="filter-list" />
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;

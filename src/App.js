import React from 'react';
import './App.css';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import EspecificFilters from './components/EspecificFilters';
import StarWarsProvider from './components/Provider';
import Header from './components/Header';
import AppliedFilters from './components/AppliedFilters';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <main>
        <InputFilter />
        <EspecificFilters />
        <Table />
        <AppliedFilters />
      </main>
    </StarWarsProvider>
  );
}

export default App;

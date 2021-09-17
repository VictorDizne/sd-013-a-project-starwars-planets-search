import React from 'react';
import './App.css';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import EspecificFilters from './components/EspecificFilters';
import StarWarsProvider from './components/Provider';

function App() {
  return (
    <StarWarsProvider>
      <InputFilter />
      <EspecificFilters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;

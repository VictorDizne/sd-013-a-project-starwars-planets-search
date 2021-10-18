import React from 'react';
import './App.css';
import FilterNumeric from './components/FilterNumeric';
import InputFilter from './components/InputFilter';
import Table from './components/Table';
import ProviderPlanet from './contexts/ProviderPlanet';

function App() {
  return (
    <ProviderPlanet>
      <FilterNumeric />
      <InputFilter />
      <Table />
    </ProviderPlanet>
  );
}

export default App;

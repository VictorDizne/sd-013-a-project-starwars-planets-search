import React from 'react';
import './App.css';
import InputFilter from './components/InputFilter';
import Table from './components/Table';
import ProviderPlanet from './contexts/ProviderPlanet';

function App() {
  return (
    <ProviderPlanet>
      <InputFilter />
      <Table />
    </ProviderPlanet>
  );
}

export default App;

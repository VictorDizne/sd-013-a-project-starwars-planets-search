import React from 'react';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';
import { PlanetsProvider } from './context';

function App() {
  return (
    <PlanetsProvider>
      <Input />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

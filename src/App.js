import React from 'react';
import './App.css';
import { Form, Table } from './components';
import { PlanetsProvider } from './context';

function App() {
  return (
    <PlanetsProvider>
      <Form />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

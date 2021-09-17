import React from 'react';
import './App.css';
import Table from './components/Table';
import ContextProvider from './contextAPI/ContextProvider';
import FilterForm from './components/FilterForm';

function App() {
  return (
    <ContextProvider>
      <FilterForm />
      <Table />
    </ContextProvider>
  );
}

export default App;

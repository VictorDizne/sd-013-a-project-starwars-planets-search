import React from 'react';
import './App.css';
import Table from './components/Table';
import ContextProvider from './contextAPI/PlanetsProvider';
import FilterForm from './components/FilterForm';
import FilterView from './components/FilterView';

function App() {
  return (
    <ContextProvider>
      <FilterForm />
      <FilterView />
      <Table />
    </ContextProvider>
  );
}

export default App;

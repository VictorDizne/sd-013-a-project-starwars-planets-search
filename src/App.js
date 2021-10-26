import React from 'react';
import './App.css';
import DeletaFiltros from './components/DeletaFiltros';
import FilterOrder from './components/FilterOrder';
import Inputs from './components/Inputs';
import Table from './components/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Inputs />
      <DeletaFiltros />
      <FilterOrder />
      <Table />
    </MyProvider>
  );
}

export default App;

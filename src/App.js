import React from 'react';
import './App.css';
import DeletaFiltros from './components/DeletaFiltros';
import Inputs from './components/Inputs';
import Table from './components/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Inputs />
      <DeletaFiltros />
      <Table />
    </MyProvider>
  );
}

export default App;

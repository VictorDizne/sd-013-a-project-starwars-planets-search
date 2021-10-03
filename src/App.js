import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetContextProvider from './contexts/PlanetContextProvider';
import Input from './components/Input';

function App() {
  return (
    <PlanetContextProvider>
      <Input />
      <Table />
    </PlanetContextProvider>
  );
}

export default App;

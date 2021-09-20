import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider'; // mover o provider para APP para atender o requisito 1
import Header from './components/Header/Header';
import TableManager from './components/Table/TableManager';

const App = () => (
  <PlanetProvider>
    <Header />
    <TableManager />
  </PlanetProvider>
);
export default App;

import React from 'react';
import './App.css';
import Filters from './components/Filters';
import TablePlanets from './components/TablePlanets';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Filters />
      <TablePlanets />
    </Provider>

  );
}

export default App;

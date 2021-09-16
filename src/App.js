import React from 'react';
import './App.css';
import TablePlanets from './components/TablePlanets';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <TablePlanets />
      <span>Hello, Ap!</span>
    </Provider>

  );
}

export default App;

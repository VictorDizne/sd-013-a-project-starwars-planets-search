import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import Inputs from './components/Inputs';

function App() {
  return (
    <Provider>
      <Inputs />
      <Table />
    </Provider>

  );
}

export default App;

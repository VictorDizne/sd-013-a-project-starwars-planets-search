import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import Provider from './components/reducer';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <div>
        <h1>Bem vindo ao Star Wars Planet Search</h1>
        <NameFilter />
        <NumericFilter />
        <Table />
      </div>
    </Provider>
  );
}

export default App;

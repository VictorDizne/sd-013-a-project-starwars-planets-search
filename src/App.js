import React from 'react';
import './App.css';
import ActiveFilter from './components/ActiveFilter';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import Provider from './components/reducer';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <div className="container">
        <h1 className="page-header">Bem vindo ao Star Wars Planet Search</h1>
        <NameFilter />
        <NumericFilter />
        <ActiveFilter />
        <br />
      </div>
      <Table />
    </Provider>
  );
}

export default App;
